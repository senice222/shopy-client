export const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="black"
        >
            <g clipPath="url(#clip0_511_38631)">
                <g mask="url(#mask0_511_38631)">
                    <path
                        // fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.9483 0.473915C20.3087 0.477568 20.6764 0.484868 20.7683 0.488521C20.8639 0.492173 20.6396 0.535993 20.2351 0.598068C19.849 0.652841 19.2532 0.751435 18.9112 0.813509C18.5655 0.879236 17.922 1.01069 17.477 1.11293C17.032 1.21518 16.3039 1.40141 15.8589 1.52921C15.4139 1.65702 14.7667 1.8542 14.4247 1.9674C14.079 2.08425 13.5164 2.28508 13.1744 2.41289C12.8287 2.54434 12.2587 2.77439 11.9057 2.92411C11.5526 3.07382 10.8318 3.40611 10.306 3.66537C9.78008 3.92461 9.03356 4.31535 8.65109 4.53445C8.26496 4.75352 7.69496 5.09313 7.38238 5.28664C7.0698 5.4802 6.80871 5.63356 6.80133 5.62992C6.79766 5.62262 6.97051 5.46192 7.18746 5.27207C7.40812 5.07852 7.70969 4.82293 7.86043 4.70242C8.01121 4.57824 8.3275 4.3409 8.55918 4.1693C8.79086 3.99766 9.19535 3.71649 9.46016 3.54852C9.72125 3.3769 10.1184 3.13224 10.3427 3.00809C10.5634 2.88029 11.0194 2.63929 11.354 2.47497C11.6887 2.31065 12.2256 2.06599 12.5492 1.93088C12.8728 1.79943 13.4612 1.58034 13.8547 1.45253C14.2482 1.32108 14.5975 1.20422 14.627 1.19327C14.6564 1.18232 14.6968 1.16771 14.7189 1.16771C14.7373 1.16406 14.8145 1.14945 14.8844 1.13119C14.9543 1.11293 15.0278 1.09103 15.0499 1.08007C15.0683 1.06912 15.1345 1.05086 15.197 1.04721C15.2558 1.03991 15.322 1.018 15.3441 0.999739C15.3625 0.977829 15.3919 0.970525 15.4066 0.981482C15.425 0.992435 15.4581 0.988782 15.4802 0.974177C15.5059 0.959571 15.5757 0.944966 15.6383 0.937661C15.6971 0.930361 15.7743 0.915751 15.8037 0.904798C15.8332 0.890193 15.8994 0.875587 15.9509 0.868282C16.0023 0.860978 16.0832 0.846372 16.1347 0.831767C16.1862 0.817161 16.2524 0.802556 16.2818 0.795251C16.3112 0.791599 16.4032 0.776993 16.4841 0.762388C16.565 0.751435 16.7783 0.718567 16.9621 0.689357C17.1423 0.660146 17.5175 0.612673 17.7896 0.57981C18.0617 0.550599 18.5104 0.514083 18.7825 0.503126C19.0546 0.488521 19.2827 0.473915 19.2863 0.470263C19.2937 0.466611 19.5916 0.470263 19.9483 0.473915ZM27.7371 3.86986C28.2005 3.88081 28.8404 3.91367 29.1529 3.94289C29.4655 3.97211 29.962 4.03781 30.2562 4.08895C30.5504 4.13641 30.9843 4.2277 31.2197 4.28613C31.4587 4.3482 31.7345 4.43586 31.8375 4.48695C31.9368 4.53809 32.2163 4.73891 32.4516 4.93609C32.6907 5.13695 33.0841 5.4802 33.3269 5.7066C33.5696 5.92934 33.9557 6.31274 34.1874 6.56106C34.4154 6.8057 34.728 7.14895 34.8751 7.32422C35.0259 7.50317 35.1398 7.65652 35.1288 7.67113C35.1178 7.68938 34.9008 7.6127 34.6434 7.50317C34.3823 7.39359 34.0329 7.25852 33.8601 7.20008C33.6873 7.14164 33.3894 7.05766 33.1982 7.00653C33.0069 6.95906 32.6759 6.88606 32.4627 6.84586C32.2494 6.8057 31.7787 6.73633 31.4146 6.69617C30.9292 6.63774 30.4437 6.61219 29.5943 6.59758C28.8845 6.5866 28.1637 6.59391 27.7371 6.61949C27.351 6.64504 26.7221 6.69617 26.3397 6.73633C25.9536 6.77649 25.3578 6.84953 25.0158 6.90063C24.6701 6.94813 24.1075 7.03942 23.7655 7.10149C23.4198 7.16356 22.8093 7.28406 22.4048 7.37168C22.0003 7.45934 21.331 7.61637 20.9154 7.71859C20.4999 7.82082 19.7975 8.0107 19.3525 8.13852C18.9075 8.26633 18.1537 8.49637 17.6793 8.64973C17.2049 8.80676 16.4657 9.05871 16.0428 9.21574C15.6162 9.37274 14.9727 9.61738 14.6086 9.76348C14.2445 9.90953 13.5752 10.1943 13.1192 10.3952C12.6632 10.5923 11.8763 10.9612 11.3724 11.2058C10.8649 11.4541 10.1295 11.8339 9.73594 12.0493C9.34246 12.2611 8.72832 12.6117 8.37527 12.8198C8.02227 13.0316 7.41547 13.4114 7.03301 13.6633C6.64687 13.9189 6.03645 14.3462 5.67234 14.62C5.30828 14.8902 4.76035 15.3175 4.45879 15.5694C4.15355 15.8214 3.61298 16.3143 3.24891 16.6649C2.88852 17.0154 2.43252 17.4938 2.23761 17.7238C2.0427 17.9539 1.78528 18.2752 1.66393 18.4359C1.54625 18.5966 1.35502 18.8777 1.23734 19.0566C1.12334 19.2392 0.957852 19.5314 0.865914 19.7139C0.77398 19.8965 0.667332 20.1375 0.623203 20.2507C0.579074 20.3676 0.52391 20.4625 0.505523 20.4625C0.483461 20.4625 0.46875 20.2544 0.46875 19.9038C0.46875 19.6007 0.487137 19.1005 0.505523 18.8011C0.52759 18.498 0.568043 18.0233 0.601137 17.7421C0.630559 17.4609 0.696754 16.9935 0.748238 16.7014C0.796043 16.4093 0.862238 16.0843 0.891656 15.9784C0.924754 15.8652 1.06082 15.6205 1.24102 15.3577C1.39915 15.1239 1.67863 14.7515 1.85515 14.5288C2.03167 14.306 2.42516 13.8751 2.73039 13.5647C3.03194 13.2543 3.51369 12.8052 3.80053 12.5605C4.08371 12.3195 4.55441 11.9361 4.84859 11.7134C5.13914 11.4906 5.65766 11.1109 6.00332 10.8735C6.34535 10.6325 6.91902 10.2601 7.27207 10.041C7.62508 9.81824 8.2282 9.46039 8.61434 9.24492C8.9968 9.02586 9.71758 8.6461 10.214 8.39777C10.7105 8.14949 11.3945 7.81719 11.7402 7.66383C12.0822 7.51047 12.7294 7.2293 13.1744 7.04305C13.6193 6.85684 14.3401 6.57199 14.7741 6.41133C15.208 6.25067 15.9104 6.00235 16.337 5.85996C16.7599 5.72121 17.4218 5.51305 17.808 5.39984C18.1904 5.28664 18.8524 5.10774 19.2789 4.9982C19.7019 4.88863 20.3896 4.72797 20.8051 4.63668C21.2207 4.54539 21.89 4.41395 22.2945 4.3409C22.699 4.27152 23.3279 4.17293 23.6919 4.1218C24.056 4.07434 24.626 4.00863 24.9606 3.97574C25.2953 3.94289 25.8653 3.90272 26.2294 3.88446C26.5934 3.86986 27.2701 3.86256 27.7371 3.86986ZM31.7271 14.0066C31.8779 14.0029 32.3413 14.0175 32.7569 14.0358C33.1724 14.0577 33.7351 14.0979 34.0072 14.1307C34.2793 14.1599 34.728 14.2257 35.0001 14.2768C35.2722 14.3279 35.6768 14.4155 35.9011 14.4739C36.1217 14.5324 36.4711 14.6383 36.6734 14.7113C36.8756 14.7843 37.1992 14.9158 37.3905 15.0071C37.5817 15.0984 37.8796 15.2664 38.0524 15.3795C38.2252 15.4927 38.5121 15.7264 38.696 15.9017C38.8762 16.077 39.0711 16.2815 39.1297 16.3582C39.218 16.4823 39.2438 16.5809 39.3176 17.1031C39.3688 17.4354 39.4277 17.8955 39.45 18.1255C39.4719 18.3555 39.5051 19.0311 39.5195 19.6227C39.5344 20.2142 39.5344 20.74 39.5234 20.7911C39.5012 20.8715 39.4828 20.8496 39.3688 20.6086C39.2953 20.4589 39.152 20.2288 39.0527 20.0973C38.9534 19.9659 38.7658 19.7614 38.6371 19.6446C38.5084 19.5241 38.2767 19.3451 38.1259 19.2465C37.9752 19.1443 37.6847 18.98 37.4824 18.8814C37.2801 18.7791 36.8977 18.6294 36.6366 18.5418C36.3718 18.4578 35.9673 18.3446 35.7356 18.2935C35.5039 18.2423 35.0957 18.1693 34.8346 18.1292C34.5698 18.089 34.1322 18.0379 33.8601 18.0123C33.588 17.9868 32.8819 17.9685 32.2972 17.9685C31.7088 17.9685 30.9659 17.9904 30.6423 18.0123C30.3187 18.0379 29.7561 18.089 29.392 18.1292C29.0279 18.1693 28.4579 18.2423 28.1232 18.2935C27.7886 18.3446 27.2664 18.4322 26.9648 18.4907C26.6596 18.5454 26.0749 18.6696 25.6594 18.7609C25.2438 18.8522 24.4826 19.0421 23.9677 19.1808C23.4529 19.3196 22.6586 19.5496 22.2025 19.692C21.7465 19.8308 21.0184 20.0718 20.5845 20.2252C20.1505 20.3785 19.4371 20.6451 19.0032 20.8167C18.5692 20.9883 17.8558 21.2841 17.4218 21.474C16.9879 21.6675 16.223 22.0254 15.7192 22.2737C15.2191 22.522 14.5681 22.8616 14.2666 23.0222C13.9687 23.1866 13.5274 23.4349 13.2847 23.5773C13.042 23.7197 12.5713 24.0082 12.2366 24.22C11.902 24.4281 11.4055 24.7567 11.1334 24.9466C10.8613 25.1402 10.5045 25.3957 10.3427 25.5163C10.1809 25.6368 9.8573 25.896 9.62195 26.0859C9.3866 26.2758 8.96 26.6446 8.66949 26.9075C8.37898 27.1668 7.95238 27.5867 7.7207 27.8386C7.48902 28.0906 7.18379 28.4411 7.04039 28.6237C6.90062 28.8063 6.67262 29.1167 6.54023 29.3175C6.40418 29.5184 6.20191 29.8652 6.08793 30.0843C5.97391 30.3034 5.83051 30.6321 5.76797 30.8146C5.70914 30.9972 5.63191 31.2565 5.6025 31.3989C5.57305 31.5377 5.53629 31.7677 5.52527 31.9101C5.51055 32.0598 5.51789 32.3045 5.54363 32.4944C5.5657 32.677 5.62453 32.9362 5.66867 33.0786C5.71281 33.2174 5.7459 33.3561 5.73855 33.378C5.73121 33.4146 5.71648 33.4146 5.67234 33.378C5.63926 33.3561 5.61352 33.3233 5.61719 33.305C5.61719 33.2904 5.4223 33.053 5.18691 32.7755C4.95156 32.5017 4.60957 32.0781 4.4257 31.8371C4.24551 31.5961 3.9182 31.1287 3.69756 30.7964C3.47691 30.4641 3.25259 30.1026 3.19743 29.993C3.10181 29.8032 3.09814 29.7666 3.09814 29.2627C3.10181 28.8939 3.1202 28.6383 3.16801 28.4229C3.20478 28.2512 3.28568 27.9738 3.34452 27.8021C3.40704 27.6305 3.56517 27.2763 3.69756 27.017C3.83363 26.7541 4.07266 26.3452 4.23816 26.1041C4.39996 25.8632 4.67207 25.4943 4.84492 25.2825C5.0141 25.0708 5.38918 24.6618 5.67234 24.3733C5.95551 24.0848 6.40051 23.6576 6.66527 23.4239C6.92637 23.1902 7.31617 22.8579 7.52949 22.6863C7.74277 22.5147 8.18773 22.1714 8.52238 21.9231C8.85703 21.6785 9.40867 21.2914 9.75434 21.065C10.0963 20.8386 10.67 20.4808 11.023 20.2726C11.3761 20.0608 11.9388 19.7359 12.2734 19.5533C12.608 19.367 13.4245 18.9471 14.0938 18.6185C14.7594 18.2898 15.5978 17.8955 15.9509 17.7421C16.3039 17.5851 16.8923 17.3404 17.2564 17.1944C17.6204 17.0446 18.1831 16.8292 18.5067 16.7087C18.8303 16.5882 19.4187 16.3801 19.8122 16.245C20.2057 16.1135 20.875 15.898 21.3016 15.7703C21.7245 15.6425 22.4195 15.4453 22.8461 15.3321C23.269 15.2189 23.8979 15.0619 24.2436 14.9815C24.5855 14.9012 25.1004 14.7843 25.3836 14.7259C25.6667 14.6675 26.2772 14.5506 26.7442 14.4739C27.2076 14.3936 27.9284 14.2877 28.3439 14.2403C28.7595 14.1891 29.3221 14.1307 29.5943 14.1052C29.8664 14.0832 30.3959 14.054 30.771 14.0394C31.1461 14.0212 31.5764 14.0066 31.7271 14.0066ZM30.0061 31.3843C30.2672 31.3843 30.6386 31.3989 30.8336 31.4171C31.0321 31.4391 31.3668 31.4975 31.5801 31.5486C31.8044 31.5997 32.1059 31.7056 32.2972 31.7969C32.4884 31.8882 32.7127 32.0343 32.8304 32.1365C32.9407 32.2388 33.0805 32.4067 33.143 32.5163C33.2349 32.6843 33.2533 32.7646 33.2643 33.0421C33.2754 33.2831 33.2643 33.4292 33.2165 33.5898C33.1834 33.7104 33.0989 33.9148 33.0327 34.0463C32.9665 34.1777 32.8267 34.3968 32.7274 34.5392C32.6282 34.6816 32.4185 34.9336 32.2641 35.1052C32.1096 35.2768 31.9809 35.4485 31.9736 35.4886C31.9699 35.5288 31.8448 35.653 31.6904 35.7735C31.5396 35.8903 31.1314 36.1715 30.7894 36.4015C30.4437 36.6279 29.9804 36.92 29.7597 37.0442C29.5354 37.172 29.1052 37.3911 28.8036 37.5371C28.4984 37.6796 28.0607 37.8804 27.8291 37.9827C27.5974 38.0812 27.112 38.2711 26.7516 38.4062C26.3948 38.5377 25.8579 38.7203 25.5564 38.8079C25.2585 38.8955 24.7253 39.0343 24.3723 39.1145C24.0192 39.1949 23.4786 39.3043 23.1771 39.3555C22.8718 39.4031 22.4747 39.4652 22.2945 39.4871C22.1106 39.509 21.8311 39.5273 21.6693 39.5309C21.5075 39.5344 21.1177 39.509 20.8051 39.4762C20.4925 39.4434 20.1174 39.3957 19.9777 39.3738C19.8343 39.352 19.6136 39.3008 19.4812 39.2605C19.3488 39.2203 19.0914 39.1109 18.9112 39.0197C18.7053 38.9138 18.5104 38.7787 18.3964 38.6655C18.2934 38.5669 18.1684 38.3989 18.1205 38.3003C18.058 38.1689 18.0286 38.0374 18.0176 37.8256C18.0066 37.6284 18.0213 37.4568 18.0654 37.2962C18.0985 37.1647 18.1904 36.9346 18.2713 36.7849C18.3486 36.6352 18.4993 36.3979 18.606 36.2555C18.7089 36.113 18.9884 35.81 19.2201 35.5799C19.4555 35.3499 19.8122 35.0359 20.0145 34.8825C20.2167 34.7291 20.5808 34.4735 20.8235 34.3129C21.0662 34.1522 21.445 33.9148 21.6693 33.7907C21.89 33.6629 22.3717 33.4146 22.7358 33.2393C23.0998 33.064 23.6552 32.8193 23.9677 32.6952C24.2803 32.5711 24.8282 32.3702 25.1813 32.2534C25.5343 32.1365 26.0823 31.9759 26.3948 31.8955C26.7074 31.8152 27.1782 31.7093 27.4429 31.6582C27.704 31.6107 28.1122 31.5413 28.3439 31.5084C28.5756 31.4756 28.9396 31.4391 29.1529 31.4208C29.3663 31.4025 29.7487 31.3879 30.0061 31.3843ZM31.8927 26.0311C32.6833 26.0384 33.1504 26.0604 33.4188 26.1005C33.6321 26.1334 33.9373 26.1845 34.0991 26.2173C34.2609 26.2502 34.5735 26.3342 34.7979 26.4036C35.0185 26.4766 35.309 26.5825 35.4414 26.6409C35.5738 26.6994 35.8128 26.8345 35.9746 26.9403C36.1364 27.0499 36.3681 27.2398 36.4895 27.3713C36.6182 27.51 36.7653 27.7218 36.8462 27.8788C36.9197 28.0285 36.997 28.2366 37.019 28.3389C37.0411 28.4448 37.0595 28.6858 37.0595 28.8684C37.0595 29.0546 37.0338 29.3066 37.008 29.4271C36.9786 29.5476 36.9455 29.7229 36.9345 29.8178C36.9234 29.9164 36.8903 30.0369 36.8609 30.0916C36.8352 30.1501 36.7359 30.2852 36.6476 30.3947C36.5557 30.5043 36.3461 30.8 36.1769 31.052C36.0077 31.3039 35.7356 31.6801 35.5738 31.8919C35.4157 32.1036 35.1288 32.4579 34.9413 32.677C34.7537 32.896 34.5036 33.1845 34.386 33.3123C34.2683 33.4401 34.1506 33.5387 34.1249 33.5314C34.0955 33.5205 34.1249 33.4511 34.2168 33.316C34.2904 33.2064 34.4154 32.9837 34.4926 32.823C34.5698 32.6623 34.6655 32.3994 34.7059 32.2388C34.7464 32.0781 34.7795 31.87 34.7795 31.7714C34.7795 31.6764 34.7611 31.5121 34.739 31.4062C34.717 31.3039 34.6581 31.1433 34.614 31.052C34.5662 30.9607 34.4779 30.822 34.4117 30.7416C34.3492 30.6613 34.2095 30.5262 34.1065 30.4386C33.9998 30.3546 33.7902 30.2195 33.6395 30.1428C33.4887 30.0661 33.2313 29.9602 33.0695 29.9091C32.9076 29.8579 32.5914 29.7812 32.3707 29.7411C32.1464 29.7009 31.7823 29.6498 31.5617 29.6279C31.3373 29.6096 30.9586 29.5914 30.7159 29.5914C30.4732 29.5914 29.9914 29.617 29.6494 29.6462C29.3037 29.6754 28.7925 29.7338 28.5094 29.7739C28.2262 29.8178 27.7445 29.8981 27.4429 29.9602C27.1377 30.0186 26.6927 30.1209 26.45 30.1793C26.2073 30.2414 25.7439 30.3692 25.4203 30.4678C25.0967 30.5664 24.626 30.7161 24.3723 30.8073C24.1185 30.895 23.6735 31.063 23.3793 31.1798C23.0851 31.2966 22.5409 31.5304 22.1658 31.6983C21.7907 31.8663 21.2207 32.1438 20.897 32.3191C20.5734 32.4907 20.1027 32.7573 19.849 32.9143C19.5952 33.0713 19.198 33.3342 18.9664 33.4986C18.7347 33.6628 18.3706 33.9404 18.1573 34.112C17.9441 34.2836 17.5653 34.6305 17.3115 34.8861C17.0578 35.1381 16.7415 35.4996 16.6055 35.6895C16.4694 35.8793 16.2929 36.1678 16.212 36.3285C16.1311 36.4892 16.0318 36.7521 15.9876 36.9127C15.9472 37.0734 15.9141 37.3107 15.9141 37.4422C15.9141 37.5737 15.9435 37.7855 15.9839 37.9169C16.0244 38.0484 16.1127 38.2346 16.1789 38.3332C16.245 38.4318 16.3995 38.6034 16.5209 38.7093C16.6496 38.8225 16.8813 38.9722 17.0725 39.0672C17.2527 39.1547 17.5616 39.2715 17.7528 39.3266C17.9441 39.3773 18.1426 39.4395 18.1941 39.4578C18.2456 39.4797 18.2677 39.5055 18.2493 39.5125C18.2272 39.5199 17.9808 39.5016 17.6977 39.4688C17.4145 39.4359 17.032 39.3773 16.8518 39.3375C16.668 39.2973 16.4878 39.257 16.4473 39.2496C16.4069 39.2426 16.2009 39.1949 15.9876 39.1437C15.7743 39.0926 15.5427 39.0452 15.4728 39.0343C15.4029 39.0233 15.2852 39.0051 15.2154 38.9941C15.1455 38.9795 14.9138 38.9284 14.7005 38.8809C14.4872 38.8298 14.1526 38.7422 13.954 38.6838C13.6414 38.5888 13.5679 38.5486 13.3656 38.3734C13.2406 38.2602 13.0236 38.0666 12.8839 37.9425C12.7441 37.8183 12.5639 37.6175 12.4867 37.497C12.4095 37.3765 12.3065 37.172 12.2624 37.0405C12.1962 36.847 12.1814 36.7229 12.1814 36.365C12.1852 36.0583 12.2035 35.8502 12.2513 35.6712C12.2881 35.5288 12.38 35.2768 12.4536 35.1052C12.5271 34.9336 12.6705 34.6634 12.7698 34.5027C12.8691 34.3421 13.0751 34.0463 13.2295 33.8454C13.3803 33.6446 13.6966 33.2868 13.9282 33.0457C14.1599 32.8084 14.5314 32.4579 14.7557 32.268C14.9763 32.0745 15.3845 31.7531 15.6567 31.5486C15.9288 31.3441 16.2855 31.0849 16.4473 30.9753C16.6091 30.8621 16.9327 30.6503 17.1644 30.5043C17.3961 30.3582 17.8595 30.0843 18.1941 29.8945C18.5288 29.7046 19.165 29.3723 19.6099 29.1532C20.0549 28.9378 20.6323 28.6639 20.897 28.5507C21.1582 28.4375 21.7061 28.2111 22.1106 28.0504C22.5151 27.8898 23.258 27.6232 23.7655 27.4552C24.2693 27.2873 25.0232 27.0572 25.4387 26.944C25.8543 26.8345 26.5236 26.6702 26.9281 26.5789C27.3326 26.4912 27.9614 26.3707 28.3255 26.3086C28.6896 26.2502 29.2118 26.1735 29.4839 26.1407C29.7561 26.1114 30.1532 26.0676 30.3665 26.053C30.5798 26.0348 31.2638 26.0238 31.8927 26.0311ZM24.5929 1.0253C24.7032 1.0326 24.8209 1.04356 24.8503 1.05086C24.8797 1.05451 24.9202 1.06547 24.9423 1.08007C24.9606 1.09103 25.0379 1.11293 25.1077 1.13119C25.1776 1.14945 25.2512 1.16406 25.2732 1.16771C25.2916 1.16771 25.3541 1.18962 25.4093 1.21153C25.4681 1.23709 25.527 1.24804 25.549 1.23709C25.5674 1.22613 25.5932 1.23344 25.6042 1.25535C25.6152 1.27361 25.7109 1.31012 25.8138 1.33568C25.9205 1.35759 26.0087 1.36854 26.0124 1.36124C26.0124 1.35394 26.0455 1.3722 26.0786 1.40141C26.1117 1.43062 26.1374 1.43792 26.1374 1.41967C26.1374 1.39776 26.1595 1.40871 26.1926 1.43792C26.2257 1.46714 26.2477 1.47444 26.2477 1.45618C26.2441 1.43427 26.2625 1.43792 26.2919 1.45983C26.3176 1.48174 26.4316 1.53286 26.542 1.56938C26.6523 1.6059 26.7516 1.63876 26.7626 1.63876C26.7736 1.64241 26.8288 1.66432 26.8913 1.68988C26.9502 1.71544 27.0163 1.74101 27.0384 1.74465C27.0568 1.74831 27.1156 1.77387 27.1671 1.80308C27.2186 1.82864 27.2627 1.85055 27.2664 1.8469C27.2738 1.84325 27.3547 1.87611 27.4503 1.91993C27.5496 1.96375 27.6489 2.00026 27.6709 2.00026C27.6967 2.00392 27.7188 2.01122 27.7188 2.02217C27.7188 2.03313 27.7812 2.06234 27.8548 2.09155C27.932 2.12076 28.0019 2.13902 28.0129 2.13537C28.024 2.12807 28.0387 2.13902 28.0497 2.15728C28.0607 2.17189 28.3733 2.33986 28.7484 2.52243C29.1235 2.70867 29.4618 2.88759 29.5023 2.92045C29.5722 2.97523 29.5685 2.97523 29.4287 2.95697C29.3479 2.94602 28.9985 2.89489 28.6565 2.84377C28.3108 2.7963 27.7592 2.73788 27.4245 2.71232C27.0421 2.68676 26.45 2.6758 25.8248 2.69041C25.2769 2.70136 24.5487 2.73788 24.2068 2.77074C23.8611 2.79995 23.3168 2.85838 22.9932 2.9022C22.6696 2.94236 22.0665 3.03365 21.6509 3.10303C21.2354 3.17241 20.5256 3.31117 20.0696 3.40976C19.6136 3.51201 18.9039 3.67998 18.4883 3.78952C18.0728 3.89907 17.3777 4.09625 16.9438 4.2277C16.5098 4.35918 15.8626 4.56363 15.5096 4.68051C15.1565 4.80102 14.5681 5.00914 14.2041 5.14426C13.84 5.28301 13.2516 5.50942 12.8986 5.65547C12.5455 5.80152 11.9902 6.03887 11.6666 6.18492C11.343 6.33102 10.6406 6.66695 10.1037 6.93715C9.5668 7.20371 8.81289 7.60176 8.43047 7.82082C8.04434 8.03629 7.45961 8.38684 7.12496 8.59133C6.79031 8.79945 6.26074 9.14637 5.94816 9.36543C5.63559 9.58453 5.1943 9.90223 4.97363 10.0738C4.7493 10.2455 4.33742 10.5814 4.05426 10.8188C3.77111 11.0598 3.2673 11.5308 2.93265 11.8704C2.598 12.2064 2.19348 12.6445 2.03903 12.838C1.88457 13.0352 1.73747 13.1959 1.71909 13.1959C1.69702 13.1959 1.72644 13.0864 1.77793 12.9476C1.82941 12.8125 1.97283 12.4729 2.09419 12.1918C2.21554 11.9106 2.46561 11.3848 2.65316 11.0232C2.84071 10.6618 3.10917 10.1761 3.25259 9.94606C3.39233 9.71598 3.6424 9.32891 3.80421 9.08793C3.96969 8.84692 4.19035 8.56574 4.29699 8.46352C4.4073 8.36125 4.69414 8.11297 4.93688 7.91578C5.17957 7.71492 5.59512 7.39727 5.85625 7.20371C6.12102 7.0102 6.6248 6.66328 6.97785 6.43324C7.3309 6.19953 7.86043 5.8709 8.15465 5.70293C8.44883 5.53133 8.98574 5.23555 9.3498 5.04567C9.71391 4.85578 10.3243 4.5527 10.7105 4.37012C11.0929 4.18754 11.6004 3.9575 11.8321 3.85525C12.0638 3.75301 12.6117 3.53026 13.0457 3.35864C13.4796 3.19067 14.2335 2.9168 14.7189 2.75248C15.2043 2.59181 15.9729 2.35081 16.4289 2.22301C16.8849 2.09155 17.5359 1.91993 17.8815 1.83959C18.2235 1.75561 18.8708 1.61685 19.3157 1.52921C19.7607 1.44158 20.4153 1.32838 20.7683 1.27726C21.1214 1.22613 21.7024 1.16041 22.0554 1.12754C22.4085 1.09103 23.0778 1.05086 23.5448 1.03626C24.0082 1.02165 24.4826 1.01434 24.5929 1.0253ZM29.9804 8.31016C30.3849 8.30649 30.988 8.32109 31.3227 8.33934C31.6573 8.36125 32.1427 8.40145 32.4075 8.4343C32.6686 8.46352 33.132 8.53652 33.4372 8.59863C33.7388 8.65703 34.169 8.75563 34.3933 8.8177C34.614 8.87977 34.956 8.98567 35.1472 9.05871C35.3384 9.13176 35.6621 9.27051 35.8643 9.37274C36.0666 9.47133 36.313 9.60645 36.4159 9.66852C36.5152 9.73426 36.6476 9.83285 36.7028 9.89492C36.7579 9.95336 36.9014 10.1724 37.019 10.3842C37.1367 10.596 37.35 10.9977 37.4934 11.2789C37.6332 11.56 37.8428 12.0128 37.9605 12.283C38.0782 12.5532 38.2694 13.0425 38.3871 13.3675C38.5084 13.6962 38.604 13.9883 38.604 14.0175C38.604 14.0504 38.468 13.9554 38.2804 13.7948C38.1039 13.6414 37.8354 13.4369 37.6846 13.3383C37.5339 13.2361 37.2434 13.0754 37.0411 12.9768C36.8388 12.8782 36.4748 12.7322 36.2321 12.6482C35.9893 12.5642 35.5995 12.451 35.3679 12.3926C35.1362 12.3341 34.7537 12.2538 34.522 12.2136C34.2904 12.1698 33.8932 12.1151 33.6395 12.0822C33.3857 12.053 32.8966 12.0128 32.5546 11.9909C32.2089 11.9727 31.6573 11.9544 31.3227 11.9544C30.988 11.9544 30.4106 11.9727 30.0355 11.9909C29.6604 12.0128 29.0978 12.053 28.7852 12.0822C28.4726 12.1151 27.9504 12.1698 27.6268 12.2136C27.3032 12.2538 26.7405 12.3341 26.3764 12.3962C26.0124 12.4583 25.3505 12.5788 24.9055 12.6701C24.4605 12.7614 23.7324 12.9221 23.2874 13.0316C22.8424 13.1375 22.2283 13.2945 21.9267 13.3785C21.6215 13.4588 21.0257 13.6341 20.6029 13.7619C20.1762 13.8897 19.5327 14.0979 19.1686 14.2184C18.8046 14.3425 18.15 14.5762 17.7161 14.7369C17.2821 14.8975 16.576 15.175 16.1531 15.3504C15.7265 15.5256 15.0977 15.7958 14.7557 15.9529C14.41 16.1062 13.715 16.4348 13.2112 16.6832C12.7037 16.9314 11.9682 17.3112 11.5747 17.523C11.1812 17.7384 10.6075 18.0634 10.306 18.246C10.0007 18.4249 9.52266 18.7207 9.23949 18.9033C8.95633 19.0859 8.50031 19.3889 8.2282 19.5788C7.95605 19.7687 7.52578 20.0827 7.27207 20.2763C7.01832 20.4698 6.57332 20.824 6.27914 21.0687C5.98496 21.3096 5.55469 21.6894 5.32301 21.9049C5.09133 22.1239 4.71988 22.4928 4.49926 22.7228C4.27859 22.9565 3.95867 23.318 3.7895 23.5298C3.61666 23.7416 3.34085 24.1177 3.17168 24.3696C3.00252 24.6216 2.78187 24.9831 2.68258 25.173C2.57961 25.3629 2.43619 25.6842 2.36264 25.8851C2.28909 26.0859 2.19716 26.389 2.16038 26.5606C2.12361 26.7322 2.07948 27.0316 2.06109 27.2288C2.04638 27.4223 2.01696 27.5794 2.00225 27.5757C1.98386 27.5684 1.91399 27.426 1.84412 27.2544C1.77425 27.0828 1.60876 26.63 1.48005 26.2502C1.35134 25.8668 1.16379 25.2278 1.0645 24.8261C0.965207 24.4245 0.843852 23.873 0.707785 23.1026L0.873269 22.6133C0.961531 22.343 1.13805 21.9195 1.26308 21.6675C1.38812 21.4155 1.62347 21.0139 1.78161 20.7729C1.94341 20.5319 2.17877 20.2032 2.30748 20.0426C2.43619 19.8819 2.70097 19.5679 2.89587 19.3488C3.09446 19.1261 3.49163 18.7171 3.78214 18.4395C4.07266 18.1584 4.5691 17.7165 4.88172 17.4573C5.1943 17.198 5.70914 16.7927 6.02172 16.559C6.3343 16.3253 6.98891 15.8725 7.4743 15.5512C7.95973 15.2262 8.63641 14.7989 8.98207 14.5945C9.32406 14.39 9.87938 14.0759 10.214 13.8897C10.5487 13.7071 11.2842 13.3274 11.8505 13.0498C12.4168 12.7723 13.2516 12.3816 13.7076 12.1808C14.1636 11.98 14.9727 11.644 15.5096 11.4322C16.0465 11.2204 16.8555 10.9173 17.3115 10.7567C17.7675 10.596 18.4846 10.3587 18.9112 10.2272C19.3341 10.0921 19.9814 9.90223 20.3454 9.79996C20.7095 9.69774 21.3714 9.52609 21.8164 9.41656C22.2614 9.31067 22.8976 9.16094 23.2322 9.09156C23.5669 9.02219 24.1185 8.91266 24.4642 8.85059C24.8062 8.78848 25.413 8.68992 25.8064 8.63149C26.2 8.57305 26.8803 8.49274 27.3142 8.44891C27.7482 8.40875 28.3623 8.36125 28.6749 8.34301C28.9875 8.3284 29.5759 8.31016 29.9804 8.31016ZM26.8729 34.5502C26.6817 34.5904 26.3397 34.6743 26.1191 34.7401C25.8947 34.8058 25.5233 34.93 25.2916 35.0213C25.0599 35.1125 24.6297 35.3061 24.3355 35.4558C24.0413 35.6018 23.6441 35.8246 23.4529 35.9524C23.2616 36.0802 22.9601 36.3212 22.7799 36.4928C22.5997 36.6645 22.3791 36.9091 22.2945 37.0405C22.2062 37.172 22.1069 37.3509 22.0738 37.4422C22.0444 37.5335 22.0187 37.6686 22.0187 37.7416C22.0187 37.8183 22.0407 37.9352 22.0702 37.9973C22.0959 38.063 22.1768 38.1689 22.243 38.2346C22.3129 38.3003 22.46 38.3916 22.5703 38.4427C22.7027 38.5048 22.938 38.5596 23.2506 38.6071C23.6404 38.6618 23.7986 38.6691 24.0964 38.6436C24.2987 38.6253 24.6223 38.5852 24.8136 38.5559C25.0048 38.5231 25.3541 38.45 25.5858 38.3916C25.8175 38.3332 26.2 38.22 26.4316 38.1396C26.6633 38.063 27.0127 37.9279 27.2039 37.8439C27.3951 37.7599 27.7114 37.6102 27.9026 37.5079C28.0938 37.4057 28.4101 37.2195 28.6013 37.0953C28.7925 36.9712 29.0831 36.7448 29.2412 36.5987C29.3993 36.449 29.6016 36.2372 29.6862 36.1277C29.7707 36.0181 29.8848 35.8428 29.9362 35.7443C29.9877 35.642 30.0392 35.4959 30.0539 35.4156C30.0723 35.3243 30.0613 35.2111 30.0319 35.1089C30.0025 35.0212 29.9215 34.8898 29.8517 34.8204C29.7818 34.7474 29.6384 34.6524 29.5391 34.6086C29.4361 34.5611 29.2559 34.4991 29.1346 34.4662C29.0059 34.4297 28.719 34.4005 28.4359 34.3932C28.1527 34.3822 27.807 34.3968 27.59 34.4297C27.3878 34.4552 27.0641 34.51 26.8729 34.5502ZM27.2591 35.7662C27.2775 35.7662 27.3988 35.7808 27.5238 35.799C27.6525 35.8209 27.8217 35.8684 27.9026 35.9086C27.9835 35.9487 28.0681 36.0181 28.0902 36.0619C28.1122 36.1094 28.1232 36.2043 28.1122 36.2737C28.0975 36.3431 28.0239 36.4928 27.9394 36.6023C27.8585 36.7119 27.6783 36.8872 27.5422 36.9858C27.4062 37.088 27.145 37.245 26.9648 37.34C26.781 37.4313 26.5089 37.5518 26.3581 37.6029C26.2073 37.654 25.9646 37.7197 25.8248 37.7489C25.6814 37.7782 25.435 37.8183 25.2732 37.8402C25.0452 37.8658 24.9239 37.8621 24.7289 37.822C24.5929 37.7928 24.4311 37.7453 24.3723 37.7161C24.3097 37.6869 24.2436 37.6284 24.2252 37.5883C24.2031 37.5481 24.1884 37.4641 24.1884 37.4057C24.1884 37.3436 24.2141 37.245 24.2436 37.1866C24.273 37.1245 24.3612 37.0077 24.4348 36.9237C24.512 36.8434 24.6554 36.7119 24.7584 36.6389C24.8577 36.5659 25.0489 36.4417 25.1813 36.3687C25.3137 36.292 25.5527 36.1751 25.7145 36.1057C25.8763 36.04 26.1558 35.9524 26.3397 35.9086C26.5199 35.8648 26.7957 35.8173 26.9465 35.8027C27.0972 35.7844 27.237 35.7698 27.2591 35.7662Z"
                        fill="#222222"
                    />
                    <path
                        d="M32.6649 20.0828C33.1283 20.0901 33.6909 20.1157 33.9153 20.1339C34.1359 20.1558 34.5 20.196 34.7243 20.2288C34.945 20.258 35.32 20.3274 35.5517 20.3786C35.7834 20.4297 36.1732 20.5356 36.4159 20.6159C36.6586 20.6926 37.0043 20.8277 37.1882 20.9117C37.3684 20.9993 37.6589 21.16 37.8318 21.2732C38.0046 21.3827 38.2252 21.5471 38.3245 21.6347C38.4238 21.7223 38.5856 21.9012 38.6886 22.0327C38.7879 22.1642 38.9313 22.4015 39.0086 22.5622C39.0895 22.7229 39.1813 22.9529 39.2145 23.0734C39.277 23.2888 39.277 23.2998 39.1738 23.822C39.1188 24.1141 39.0232 24.5486 38.9644 24.7896C38.9019 25.0306 38.6849 25.7902 38.6776 25.8194C38.6555 25.918 38.2841 26.9769 38.2841 26.9988C38.262 27.0499 38.1443 27.3457 38.1113 27.4187C38.0782 27.448 38.0598 27.3749 38.0414 27.1084C38.0267 26.9185 37.9899 26.6629 37.9605 26.5424C37.9311 26.4219 37.8465 26.2064 37.7803 26.0677C37.7031 25.9107 37.5596 25.7062 37.3978 25.5382C37.2581 25.3885 37.0227 25.1804 36.872 25.0781C36.7212 24.9722 36.4674 24.8225 36.3056 24.7421C36.1438 24.6618 35.8717 24.5486 35.6988 24.4866C35.526 24.4281 35.2024 24.3368 34.9817 24.2821C34.7574 24.2309 34.3602 24.1543 34.0991 24.1141C33.8344 24.0739 33.2901 24.0228 32.8856 23.9972C32.3119 23.9644 31.9589 23.9644 31.2859 23.9972C30.8115 24.0228 30.19 24.0666 29.9068 24.0958C29.6237 24.125 29.1015 24.1908 28.7484 24.2419C28.3954 24.2967 27.7813 24.4026 27.3878 24.4793C26.9943 24.5559 26.3654 24.6947 25.9903 24.7896C25.6152 24.8809 25.0048 25.0452 24.6297 25.1548C24.2546 25.2643 23.5595 25.4834 23.0852 25.6441C22.6107 25.8011 21.9304 26.0421 21.5774 26.1772C21.2243 26.3123 20.6433 26.546 20.2903 26.6957C19.9372 26.8455 19.1834 27.1923 18.617 27.4735C18.0507 27.7511 17.3225 28.1308 16.999 28.317C16.6753 28.4996 16.1458 28.8173 15.8222 29.0218C15.4985 29.2262 15.0094 29.5512 14.7373 29.7411C14.4652 29.9346 14.0717 30.2268 13.8621 30.3875C13.6561 30.5518 13.2921 30.8585 13.053 31.0666C12.8177 31.2748 12.4499 31.6217 12.2366 31.8444C12.0233 32.0635 11.7365 32.3812 11.6004 32.5492C11.4607 32.7208 11.2474 33.0056 11.126 33.1882C11.0047 33.3671 10.8282 33.6629 10.7362 33.8455C10.648 34.0244 10.5303 34.2873 10.4825 34.4297C10.4347 34.5685 10.3722 34.7949 10.3427 34.93C10.3133 35.0687 10.2876 35.3389 10.2876 35.5325C10.2876 35.7333 10.3133 35.9853 10.3464 36.1095C10.3758 36.2299 10.4604 36.4417 10.5303 36.5841C10.6002 36.7229 10.7877 36.9968 10.9495 37.1866C11.1077 37.3765 11.2364 37.5372 11.2327 37.5445C11.229 37.5482 11.001 37.4277 10.7289 37.2743C10.4567 37.1209 10.1074 36.9201 9.95661 36.8288C9.80583 36.7375 9.66243 36.6353 9.63668 36.6024C9.61094 36.5732 9.58887 36.5586 9.58887 36.5732C9.58887 36.5914 9.55208 36.5695 9.50426 36.5294C9.46016 36.4892 9.0409 36.1861 8.57754 35.8575C8.11051 35.5252 7.67657 35.2002 7.6104 35.1345C7.54418 35.0688 7.42282 34.8825 7.34559 34.7218C7.26836 34.5612 7.17645 34.3311 7.14336 34.2106C7.11391 34.0901 7.07715 33.8272 7.06614 33.6264C7.04774 33.3635 7.05876 33.1627 7.1029 32.9143C7.13598 32.7245 7.21688 32.4177 7.27575 32.2388C7.33825 32.0562 7.47063 31.7458 7.56993 31.545C7.6729 31.3442 7.87516 30.9973 8.02227 30.7782C8.16934 30.5554 8.44516 30.1866 8.6327 29.9566C8.82395 29.7265 9.23583 29.2811 9.5484 28.9707C9.86465 28.6603 10.3611 28.2038 10.6553 27.9629C10.9495 27.7182 11.4276 27.3421 11.7218 27.123C12.016 26.9039 12.5272 26.5424 12.8618 26.3233C13.1965 26.1005 13.7334 25.7609 14.057 25.5674C14.3806 25.3775 14.8587 25.1 15.1234 24.9539C15.3845 24.8079 16.0244 24.4756 16.5393 24.22C17.0541 23.9644 17.8006 23.6102 18.1941 23.4386C18.5876 23.2633 19.2165 22.9967 19.5916 22.8434C19.9666 22.6936 20.5771 22.46 20.9522 22.3248C21.3273 22.1897 21.9378 21.9779 22.3129 21.8574C22.688 21.737 23.258 21.5617 23.5816 21.4667C23.9052 21.3754 24.4495 21.2257 24.7952 21.1381C25.1372 21.0468 25.7513 20.9044 26.1558 20.8131C26.5604 20.7255 27.1708 20.6013 27.5165 20.5392C27.8585 20.4735 28.4211 20.3859 28.7668 20.3347C29.1088 20.2873 29.6715 20.2215 30.0172 20.1887C30.3591 20.1558 30.9071 20.112 31.2307 20.0974C31.5543 20.0791 32.1979 20.0718 32.6649 20.0828Z"
                        fill="#222222"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_511_38631">
                    <rect width={40} height={40} fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

// export const