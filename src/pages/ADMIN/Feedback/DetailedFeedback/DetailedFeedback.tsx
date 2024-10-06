import React, {useEffect, useMemo, useRef, useState} from 'react';
import s from "./DetailedFeedback.module.scss";
import BackTick from "../../../../components/ADMIN/BackTick/BackTick";
import {Avatar, PoleIcon, RadioSvg, Search, TextSvg} from "../Svgs";
import { Plus } from "../../CategoriesAndProducts/Svg";
import { FeedBackInput } from "../Fields/Input/Input";
import { FeedBackRadio } from "../Fields/Radio/Radio";
import { FeedBackTextArea } from "../Fields/TextArea/TextArea";
import {OwnSelect} from "../../../../components/OwnSelect/OwnSelect";
import {Cross} from "../../../../components/Modals/AdminModal/Svgs";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {url} from '../../../../core/fetch'
import { useNavigate } from 'react-router-dom';


export interface Variant {
  name: string;
  id: string;
}

interface Block {
  inputType: 'radio' | 'input' | 'textarea';
  name: string;
  placeholder: string;
  description: string;
  savingData: boolean;
  variants?: Variant[];
}

interface Banner {
  title: string;
  description: string;
}

interface Value {
  id: string;
  value: string;
}

interface VariantD {
  price: number;
  oldPrice: number;
  img: string;
  quantity: number;
  attachedId: string;
  visible: boolean;
  banner: Banner;
  values: Value[];
}
const DetailedFeedback = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [attachedOpened, setAttachedOpened] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Variant[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [attached, setAttached] = useState<Variant[]>([])
  const [data, setData] = useState(null)
  const params = useParams()
  console.log(params)

  const navigate = useNavigate()

  // Ссылка для хранения таймера
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const filteredAndSortedResults = useMemo(() => {
    // Создаём множество ID из массива attached для быстрой проверки
    const attachedIds = new Set(attached.map(item => item.id));

    // Фильтруем элементы, исключая те, у которых id есть в attached
    const filteredResults = results.filter(result => !attachedIds.has(result.id));

    // Сортируем по какому-либо критерию, например, по имени

    return filteredResults;
  }, [results, attached]);
  const getFeedback = async (id : string) => {
    try {
      const {data : data2} = await axios.get(`${url}/api/feedback/${id}`)

      if (data2) {
        setData(data2._id)
        if (data2.attached) {
          setAttached(data2.attached)
        }
        setBlocks(data2.blocks)
      }
    } catch (err) {

    }
  }
  useEffect(() => {
    if (params.id) {
      getFeedback(params.id)
    }
  }, [params])
  // Функция для отправки запроса на сервер
  const fetchResults = async (searchQuery: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/products/variants?query=${encodeURIComponent(searchQuery)}`);
      setResults(response.data);
    } catch (error) {
      console.error('Ошибка при выполнении поиска:', error);
    } finally {
      setLoading(false);
    }
  };
  // Обработка изменений в поле ввода
  useEffect(() => {
    if (query.trim()) {
      // Очищаем предыдущий таймер, если он был
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      // Устанавливаем новый таймер
      debounceRef.current = setTimeout(() => {
        fetchResults(query);
      }, 500);
    } else {
      // Если запрос пустой, очищаем результаты
      setResults([]);
    }

    // Очистка при размонтировании
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);
  const onSubmit = async (values : any) => {
    console.log()
  }
  const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

  const updateBlock = <K extends keyof Block>(index: number, key: K, value: Block[K]) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index][key] = value;
    setBlocks(updatedBlocks);
  };

  const addBlock = (inputType: Block["inputType"]) => {
    const newBlock: Block = {
      inputType,
      name: "",
      placeholder: "",
      description: "",
      savingData: false,
      variants: inputType === "radio" ? [{ name: "Option 1", id: generateUniqueId() }] : [],
    };
    setBlocks([...blocks, newBlock]);
  };

  const save = async () => {
    const token = localStorage.getItem('token')
    if (params.id) {
      const { data } = await axios.put(`${url}/api/feedback/${params.id}`, {
        blocks, attached
      },{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (data) {
        navigate('/panel/settings')
      }
    } else {
      const { data } = await axios.post(`${url}/api/feedback/create`, {
        blocks, attached, name: generateUniqueId()
      },{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (data) {
        navigate('/panel/settings')
      }
    }
    
  }

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];

    if (direction === 'up' && index > 0) {
      const [removed] = newBlocks.splice(index, 1);
      newBlocks.splice(index - 1, 0, removed);
    } else if (direction === 'down' && index < newBlocks.length - 1) {
      const [removed] = newBlocks.splice(index, 1);
      newBlocks.splice(index + 1, 0, removed);
    }

    setBlocks(newBlocks);
  };

  const copyBlock = (index: number) => {
    const blockToCopy = blocks[index];
    const copiedBlock = { ...blockToCopy, name: `${blockToCopy.name} (copy)` };
    setBlocks([...blocks.slice(0, index + 1), copiedBlock, ...blocks.slice(index + 1)]);
  };

  const deleteBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const handleVariantChange = (
      blockIndex: number,
      variantId: string,
      newVariantName: string
  ) => {
    const updatedVariants = blocks[blockIndex].variants!.map(v =>
        v.id === variantId ? { ...v, name: newVariantName } : v
    );
    updateBlock(blockIndex, "variants", updatedVariants);
  };

  const addVariant = (index: number) => {
    const newVariant: Variant = { name: `Option ${blocks[index].variants!.length + 1}`, id: generateUniqueId() };
    updateBlock(index, "variants", [...(blocks[index].variants || []), newVariant]);
  };

  const deleteVariant = (blockIndex: number, variantId: string) => {
    updateBlock(blockIndex, "variants", blocks[blockIndex].variants!.filter(v => v.id !== variantId));
  };

  return (
      <div className={s.detailedFeedback}>
        <div className={s.leftDiv}>
          <BackTick
              title={"Settings"}
              to="/panel"
              nestedTitle={"Feedback"}
              nestedTo={"/panel/settings/"}
          />
          <div className={s.addBlock + ' ' +s.addBlock2}>
            <h3>Добавить блок</h3>
            <div className={s.blocks}>
              <div className={s.block} onClick={() => addBlock('input')}>
                <div className={s.flex12}>
                  <div className={s.icon}><PoleIcon /></div>
                  <p>Поле для ввода в одну строку</p>
                </div>
                <button><Plus /> Добавить</button>
              </div>
              <div className={s.block} onClick={() => addBlock('textarea')}>
                <div className={s.flex12}>
                  <div className={s.icon}><TextSvg /></div>
                  <p>Текстовое поле в несколько строк</p>
                </div>
                <button><Plus /> Добавить</button>
              </div>
              <div className={s.block} onClick={() => addBlock('radio')}>
                <div className={s.flex12}>
                  <div className={s.icon}><RadioSvg /></div>
                  <p>Радио-кнопки</p>
                </div>
                <button><Plus /> Добавить</button>
              </div>
            </div>
          </div>
          <div className={s.topDiv}>
            <h1>Настройки обратной связи</h1>
            <p>Название обратной связи</p>
            <div className={s.btns}>
              <button onClick={() => navigate('/panel/settings')} className={s.gray}>Отмена</button>
              <button onClick={save} className={s.blue}>Сохранить</button>
            </div>
          </div>
          {blocks.map((block, index) => {
            console.log(index, 11)
            const commonProps = {
              name: block.name,
              placeholder: block.placeholder,
              description: block.description,
              savingData: block.savingData,
              onNameChange: (name: string) => updateBlock(index, 'name', name),
              onPlaceholderChange: (placeholder: string) => updateBlock(index, 'placeholder', placeholder),
              onDescriptionChange: (description: string) => updateBlock(index, 'description', description),
              onSavingDataChange: (savingData: boolean) => updateBlock(index, 'savingData', savingData),
              moveBlockUp: () => moveBlock(index, 'up'),
              moveBlockDown: () => moveBlock(index, 'down'),
              copyBlock: () => copyBlock(index),
              deleteBlock: () => deleteBlock(index),
              addVariant: () => addVariant(index),
              deleteVariant: (id: string) => deleteVariant(index, id),
              onVariantChange: (id: string, newName: string) => handleVariantChange(index, id, newName),
              index,
            };

            return (
                <div key={index} className={s.blockContainer}>
                  {block.inputType === 'input' && <FeedBackInput {...commonProps} length={blocks.length} />}
                  {block.inputType === 'textarea' && <FeedBackTextArea {...commonProps} length={blocks.length} />}
                  {block.inputType === 'radio' && (
                      <FeedBackRadio
                          {...commonProps}
                          onVariantChange={(variantId: string, newVariantName: string) => handleVariantChange(index, variantId, newVariantName)}
                          onAddVariant={() => addVariant(index)}
                          onDeleteVariant={(variantId: string) => deleteVariant(index, variantId)}
                          variants={block.variants || []}
                          length={blocks.length}
                      />
                  )}
                </div>
            );
          })}
          <div className={s.lastBtns}>
            <div className={s.btns}>
              <button onClick={() => navigate('/panel/settings')} className={s.gray}>Отмена</button>
              <button onClick={save} className={s.blue}>Сохранить</button>
            </div>
          </div>
        </div>
        <div className={s.rightDiv}>
          <div className={s.addBlock}>
            <h3>Добавить блок</h3>
            <div className={s.blocks}>
              <div className={s.block} onClick={() => addBlock('input')}>
                <div className={s.flex12}>
                  <div className={s.icon}><PoleIcon /></div>
                  <p>Поле для ввода в одну строку</p>
                </div>
                <button><Plus /> Добавить</button>
              </div>
              <div className={s.block} onClick={() => addBlock('textarea')}>
                <div className={s.flex12}>
                  <div className={s.icon}><TextSvg /></div>
                  <p>Текстовое поле в несколько строк</p>
                </div>
                <button><Plus /> Добавить</button>
              </div>
              <div className={s.block} onClick={() => addBlock('radio')}>
                <div className={s.flex12}>
                  <div className={s.icon}><RadioSvg /></div>
                  <p>Радио-кнопки</p>
                </div>
                <button><Plus /> Добавить</button>
              </div>
            </div>
          </div>
          <div className={s.view}>
            <h3>Предпросмотр</h3>
            <div className={s.adsa}>
              {blocks.map((item: Block) => {
                if (item.inputType === 'radio') {
                  console.log(item.variants, 22)
                  return (
                      <div className={s.selectBlock}>
                        <p className={s.headingText}>{item.name}</p>
                        <div className={s.select}>
                              <OwnSelect items={item.variants ? item.variants.map(item => ({
                                _id: item.id,
                                name: item.name
                              })) : []} setSelected={() => null} />
                        </div>
                      </div>
                  )
                } else if (item.inputType === "input") {
                  return (
                      <div className={s.loginBlock}>
                        <p className={s.headingText}>{item.name}</p>
                        <input
                            type="text"
                            placeholder={item.placeholder}
                        />
                        <p className={s.descr}>
                          {item.description}
                        </p>
                      </div>
                  )
                } else if (item.inputType === "textarea") {
                  return (
                      <div className={s.loginBlock}>
                        <p className={s.headingText}>{item.name}</p>
                        <textarea

                            placeholder={item.placeholder}
                        />
                        <p className={s.descr}>
                          {item.description}
                        </p>
                      </div>
                  )
                }
              })}
            </div>
          </div>
          <div className={`${s.attachedTo} ${attachedOpened ? s.activeAttached : ""}`}>
            <div className={s.topDiv4ik}>
              <h3>Прикрпеить к товарам</h3>
              <svg
                  className={attachedOpened ? s.active2 : ''}
                  onClick={() => setAttachedOpened((prev) => !prev)}
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
              >
                <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#98A2B3"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={s.searchWrapper}>
              <div className={s.searchDiv}>
                <Search />
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Поиск" />
              </div>
            </div>
            <div className={s.itemsAttached}>
              {
                attached.map((item) => <div className={s.attachedItem}>
                  <div className={s.avatarDiv}>
                    <Avatar />
                    <h2>{item.name}</h2>
                  </div>
                  <div onClick={() => {
                      setAttached((prevItems) => prevItems.filter(item2 => String(item2.id) !== String(item.id)));
                  }} className={s.cross}><Cross /></div>
                </div>)
              }
            </div>
            <div className={s.line} />
            {
              results ? filteredAndSortedResults.map((item) => <div onClick={() => setAttached((prev) => [...prev, item])} className={s.attachedItem}>
                <div className={s.avatarDiv}>
                  <Avatar />
                  <h2>{item.name}</h2>
                </div>
              </div>) : <p>Loading...</p>
            }
          </div>
        </div>
      </div>
  );
};

export default DetailedFeedback;
