import React, {useCallback, useState} from 'react';
import s from "./DetailedFeedback.module.scss";
import BackTick from "../../../../components/ADMIN/BackTick/BackTick";
import { PoleIcon, RadioSvg, TextSvg } from "../Svgs";
import { Trash, Arrow2, Copy, Plus } from "../../CategoriesAndProducts/Svg";
import { FeedBackInput } from "../Fields/Input/Input";
import { FeedBackRadio } from "../Fields/Radio/Radio";
import { FeedBackTextArea } from "../Fields/TextArea/TextArea";
import {FeedbackBlock} from "../../../../interfaces/Feedback";
import {OwnSelect} from "../../../../components/OwnSelect/OwnSelect";
import {CheckBox} from "../../../../components/CheckBox/CheckBox";
import Button from "../../../../components/Button/Button";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

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

const DetailedFeedback = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const onSubmit = async (values : any) => {
    console.log()
  }
  // Функция генерации уникального ID
  const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

  // Функция обновления блока
  const updateBlock = <K extends keyof Block>(index: number, key: K, value: Block[K]) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index][key] = value;
    setBlocks(updatedBlocks);
  };

  // Функция добавления блока
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

  // Функция перемещения блока вперед
  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];

    // Убедитесь, что индекс корректен
    if (direction === 'up' && index > 0) {
      const [removed] = newBlocks.splice(index, 1);
      newBlocks.splice(index - 1, 0, removed);
    } else if (direction === 'down' && index < newBlocks.length - 1) {
      const [removed] = newBlocks.splice(index, 1);
      newBlocks.splice(index + 1, 0, removed);
    }

    setBlocks(newBlocks);
  };

  // Функция копирования блока
  const copyBlock = (index: number) => {
    const blockToCopy = blocks[index];
    const copiedBlock = { ...blockToCopy, name: `${blockToCopy.name} (copy)` };
    setBlocks([...blocks.slice(0, index + 1), copiedBlock, ...blocks.slice(index + 1)]);
  };

  // Функция удаления блока
  const deleteBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  // Функция обработки изменения варианта
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

  // Функция добавления нового варианта
  const addVariant = (index: number) => {
    const newVariant: Variant = { name: `Option ${blocks[index].variants!.length + 1}`, id: generateUniqueId() };
    updateBlock(index, "variants", [...(blocks[index].variants || []), newVariant]);
  };

  // Функция удаления варианта
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
          <div className={s.topDiv}>
            <h1>Настройки обратной связи</h1>
            <p>Название обратной связи</p>
            <div className={s.btns}>
              <button className={s.gray}>Отмена</button>
              <button className={s.blue}>Сохранить</button>
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
              <button className={s.gray}>Отмена</button>
              <button className={s.blue}>Сохранить</button>
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
        </div>
      </div>
  );
};

export default DetailedFeedback;
