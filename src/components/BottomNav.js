export default function BottomNav(){
    return(
        <section class="bottom-nav d-block d-lg-none fixed-bottom">
    <div class="container-fluid">
      <div>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                  <path
                    d="M13.4374 29.4626V25.1389C13.4374 24.0352 14.3387 23.1405 15.4505 23.1405H19.5147C20.0486 23.1405 20.5606 23.351 20.9382 23.7258C21.3157 24.1006 21.5278 24.6089 21.5278 25.1389V29.4626C21.5244 29.9215 21.7057 30.3627 22.0313 30.6884C22.357 31.014 22.8001 31.1972 23.2623 31.1972H26.0351C27.3301 31.2005 28.5731 30.6921 29.49 29.7843C30.4069 28.8764 30.9222 27.6437 30.9222 26.3581V14.0406C30.9222 13.0021 30.4585 12.0171 29.6561 11.3508L20.2237 3.87232C18.5829 2.56109 16.232 2.60342 14.6402 3.97287L5.42308 11.3508C4.58276 11.9974 4.08051 12.9854 4.05569 14.0406V26.3455C4.05569 29.025 6.24373 31.1972 8.94281 31.1972H11.6523C12.6123 31.1972 13.3925 30.4282 13.3995 29.4752L13.4374 29.4626Z"
                    fill="#F37435" />
                </svg>
                <p>Home</p>
              </div>
            </a>
          </li>
          <li class="nav-item centered">
            <a class="nav-link" href="#">

              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 28" fill="none">
                  <g opacity="0.6" clip-path="url(#clip0_1_344)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M25.646 21.3944H22.2752C21.5261 21.3944 20.9132 22.0218 20.9132 22.7892V28H27.008V22.7892C27.008 22.0218 26.395 21.3944 25.646 21.3944ZM16.7588 3.70315H20.6715C21.1875 3.70315 21.6085 4.13478 21.6085 4.66293V7.1752C21.6085 7.43893 21.5035 7.67888 21.3335 7.85289C21.1636 8.0269 20.9291 8.13497 20.6715 8.13497H18.3791L16.9554 9.38703C16.8896 9.44549 16.79 9.43733 16.7329 9.36936C16.7195 9.3536 16.7093 9.33526 16.703 9.31542C16.6966 9.29558 16.6941 9.27463 16.6957 9.25381L16.7714 8.13429H16.7588C16.5012 8.13429 16.2668 8.0269 16.0968 7.85289C15.9268 7.67888 15.8212 7.43893 15.8212 7.1752V4.66293C15.8212 4.13478 16.2422 3.70315 16.7588 3.70315ZM3.0632 0.082247C7.66449 0.67293 12.2545 0.963173 16.8332 0.961134C21.4119 0.958415 26.0026 0.662734 30.6039 0.082247L31.2473 0.00135945V17.1094L30.6039 17.0292C26.0026 16.4542 21.4119 16.1558 16.8332 16.1503C12.2439 16.1456 7.65453 16.4324 3.06519 17.0265L2.41972 17.1101V0L3.0632 0.082247ZM16.8332 2.13094C12.4012 2.13298 7.97925 1.86789 3.56722 1.32819V15.7846C7.98921 15.2388 12.4119 14.9757 16.8332 14.9805C21.2658 14.9859 25.6878 15.2585 30.0998 15.7853V1.32683C25.6878 1.85837 21.2658 2.12823 16.8332 2.13094ZM8.99925 13.7604C8.80933 13.7604 8.65527 13.6027 8.65527 13.4076C8.65527 13.2132 8.80933 13.0555 8.99925 13.0555H24.8591C25.049 13.0555 25.2037 13.2132 25.2037 13.4076C25.2037 13.6027 25.049 13.7604 24.8591 13.7604H8.99925ZM18.3021 11.8755C18.1122 11.8755 17.9575 11.7171 17.9575 11.5227C17.9575 11.3283 18.1122 11.17 18.3021 11.17H24.8591C25.049 11.17 25.2037 11.3283 25.2037 11.5227C25.2037 11.7171 25.049 11.8755 24.8591 11.8755H18.3021ZM20.4444 9.98995C20.3531 9.98995 20.2655 9.95282 20.2009 9.88672C20.1363 9.82063 20.1001 9.73098 20.1001 9.63751C20.1001 9.54404 20.1363 9.45439 20.2009 9.3883C20.2655 9.3222 20.3531 9.28507 20.4444 9.28507H24.8491C25.039 9.28507 25.1937 9.44277 25.1937 9.63785C25.1937 9.83225 25.039 9.98995 24.8491 9.98995H20.4444ZM12.3846 10.6642H12.4896C12.5839 10.6642 12.6609 10.5854 12.6609 10.4889V10.2047C12.6609 10.1082 12.5839 10.0294 12.4896 10.0294H11.8693C11.775 10.0294 11.698 10.1082 11.698 10.2047V10.4889C11.698 10.5854 11.775 10.6642 11.8693 10.6642H11.9756L11.7717 11.7226H12.5805L12.3846 10.6642ZM8.808 11.7226C8.88835 10.6554 8.68449 10.7009 9.55707 10.3665C9.99335 10.1993 10.3805 9.98791 10.7803 9.73165L11.5293 11.7226H8.808ZM13.6112 9.64125C13.9771 9.88119 14.327 10.0776 14.7421 10.2197C15.5569 10.497 15.5542 10.5358 15.5489 11.7226H12.8382L13.6112 9.64125ZM11.2996 9.1199C11.3188 8.95608 10.844 8.33006 10.757 8.0303C10.5711 7.72782 10.5053 7.24725 10.7079 6.92778C10.7882 6.80067 10.7537 6.69055 10.7537 6.51518C10.7537 4.77576 13.732 4.77508 13.732 6.51518C13.732 6.73542 13.6829 6.7864 13.7984 6.96041C13.993 7.24929 13.8934 7.76248 13.7287 8.03098C13.6231 8.34637 13.1251 8.94181 13.1596 9.12058C13.1908 10.0137 11.2936 9.98383 11.2996 9.1199ZM18.3373 4.88316L19.5512 5.75049C19.6037 5.78448 19.6355 5.84361 19.6355 5.90751C19.6355 5.968 19.6063 6.0251 19.5578 6.06045L18.3479 6.91554C18.316 6.94341 18.2749 6.95837 18.233 6.95837H18.2311C18.1308 6.95837 18.0491 6.87476 18.0491 6.77212V5.0327C18.0491 4.93006 18.1301 4.84713 18.2304 4.84713C18.2689 4.84713 18.3068 4.85937 18.3373 4.88316ZM15.3045 21.3944H18.6746C19.4244 21.3944 20.0373 22.0218 20.0373 22.7892V28H13.9419V22.7892C13.9419 22.0218 14.5548 21.3944 15.3045 21.3944ZM4.85816 18.061H8.22828C8.978 18.061 9.59093 18.6891 9.59093 19.4558V20.4768H8.3332C7.71164 20.4768 7.14652 20.7364 6.73746 21.1551C6.66441 21.2306 6.59601 21.3108 6.53292 21.3951C6.4705 21.3108 6.4021 21.2306 6.32839 21.1551C5.92 20.7364 5.35488 20.4768 4.73265 20.4768H3.4955V19.4558C3.4955 18.6884 4.1091 18.061 4.85816 18.061ZM29.1416 18.061H25.7715C25.0224 18.061 24.4088 18.6891 24.4088 19.4558V20.4768H25.646C26.2675 20.4768 26.8327 20.7364 27.2417 21.1551C27.3194 21.2347 27.3918 21.321 27.4582 21.4114C27.5233 21.3224 27.5943 21.2374 27.6714 21.1585L27.6767 21.1531C28.0871 20.7358 28.6502 20.4768 29.2671 20.4768H30.5043V19.4558C30.5043 18.6884 29.8907 18.061 29.1416 18.061ZM18.8001 18.061H22.1703C22.92 18.061 23.5329 18.6891 23.5329 19.4558V20.4768H22.2752C21.6536 20.4768 21.0885 20.7364 20.6794 21.1551C20.6064 21.2306 20.538 21.3108 20.4749 21.3951C20.4125 21.3108 20.3441 21.2306 20.2704 21.1551C19.862 20.7364 19.2969 20.4768 18.6746 20.4768H17.4375V19.4558C17.4375 18.6884 18.0511 18.061 18.8001 18.061ZM15.1996 18.061H11.8295C11.0798 18.061 10.4668 18.6891 10.4668 19.4558V20.4768H11.704C12.3255 20.4768 12.8907 20.7364 13.2997 21.1551C13.3728 21.2306 13.4412 21.3101 13.5043 21.3951C13.5667 21.3101 13.6351 21.2306 13.7081 21.1551C14.1172 20.7364 14.6823 20.4768 15.3045 20.4768H16.5623V19.4558C16.5623 18.6884 15.9487 18.061 15.1996 18.061ZM11.704 21.3944H8.3332C7.58414 21.3944 6.97121 22.0218 6.97121 22.7892V28H13.066V22.7892C13.066 22.0218 12.453 21.3944 11.704 21.3944ZM1.36253 21.3944H4.73265C5.48171 21.3944 6.09531 22.0218 6.09531 22.7892V28H-0.00012207V22.7892C-0.00012207 22.0218 0.612808 21.3944 1.36253 21.3944ZM29.2671 21.3944H32.6372C33.3869 21.3944 33.9999 22.0218 33.9999 22.7892V28H27.9044V22.7892C27.9044 22.0218 28.518 21.3944 29.2671 21.3944Z"
                      fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_344">
                      <rect width="34" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Learn</p>
              </div>



            </a>
          </li>

          <li class="nav-item centered">
            <a class="nav-link" href="#">

              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 28 28" fill="none">
                  <g opacity="0.6">
                    <path
                      d="M7.81852 0H19.3574C21.5045 0 23.458 0.881099 24.8753 2.2962C26.2949 3.71352 27.176 5.66929 27.176 7.81864V19.5244C27.176 21.6693 26.2949 23.6228 24.8798 25.0401L24.8753 25.0446C23.4558 26.4619 21.5023 27.3408 19.3596 27.3408H7.81852C5.66917 27.3408 3.7134 26.4597 2.29608 25.0446L2.24268 24.9845C0.858727 23.5738 -0.00012207 21.6425 -0.00012207 19.5221V7.81864C-0.00012207 5.66707 0.878752 3.71352 2.29608 2.2962C3.7134 0.878874 5.66695 0 7.81852 0ZM20.3608 6.90194L20.3764 6.92642H25.1824C24.9888 5.66262 24.3858 4.52787 23.5181 3.6579C22.4501 2.5899 20.9772 1.92685 19.3574 1.92685H17.3838L20.3608 6.90194ZM18.1381 6.92642L15.1454 1.92685H8.58169L11.6099 6.92642H18.1381ZM9.36934 6.92642L6.44125 2.08927C5.37102 2.34737 4.41205 2.9014 3.65777 3.6579C2.79002 4.52564 2.18928 5.66262 1.99348 6.92642H9.36934ZM25.2491 8.85326H1.92673V19.5244C1.92673 21.1197 2.56975 22.5726 3.60882 23.6361L3.65777 23.6829C4.72577 24.7509 6.20095 25.4161 7.81852 25.4161H19.3574C20.9772 25.4161 22.4501 24.7531 23.5159 23.6873L23.5203 23.6829C24.5861 22.6171 25.2491 21.1441 25.2491 19.5244V8.85326ZM11.3362 12.2264L17.3059 16.109C17.4016 16.1713 17.4884 16.2514 17.5573 16.3493C17.8288 16.7431 17.7287 17.2838 17.3348 17.5552L11.3896 21.0641C11.2406 21.1864 11.0492 21.2599 10.8378 21.2599C10.3572 21.2599 9.96787 20.8705 9.96787 20.3899V12.9384H9.97232C9.97232 12.767 10.0235 12.5935 10.1281 12.4422C10.404 12.0484 10.9446 11.9527 11.3362 12.2264Z"
                      fill="black" />
                  </g>
                </svg>
                <p>Reel's</p>
              </div>

            </a>
          </li>
          <li class="nav-item centered">
            <a class="nav-link" href="#">

              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none">
                  <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.0981 16.6661C25.4627 16.6656 26.7969 17.0854 27.9318 17.8726C29.0667 18.6598 29.9514 19.779 30.474 21.0885C30.9966 22.3981 31.1335 23.8392 30.8676 25.2296C30.6017 26.62 29.9448 27.8973 28.98 28.8999C28.0152 29.9025 26.7859 30.5853 25.4475 30.8621C24.1091 31.1388 22.7218 30.997 21.461 30.4547C20.2001 29.9123 19.1225 28.9937 18.3643 27.815C17.6061 26.6364 17.2014 25.2506 17.2014 23.833C17.2014 21.9327 17.9279 20.1101 19.2212 18.7661C20.5145 17.4222 22.2687 16.6668 24.0981 16.6661ZM18.059 1.04815C18.059 0.46379 18.6165 -3.05176e-05 19.3052 -3.05176e-05C19.9939 -3.05176e-05 20.5513 0.476892 20.5513 1.06125V5.98771C20.5513 6.57469 19.9939 7.049 19.3052 7.049C18.6165 7.049 18.059 6.57469 18.059 5.98771V1.04815ZM6.89409 1.04815C6.89409 0.46379 7.45158 -3.05176e-05 8.14025 -3.05176e-05C8.82891 -3.05176e-05 9.38892 0.476892 9.38892 1.06125V5.98771C9.38892 6.57469 8.82891 7.0621 8.14025 7.0621C7.45158 7.0621 6.89409 6.5878 6.89409 6.00081V1.04815ZM16.1217 29.315H2.583C1.89873 29.3123 1.24325 29.0287 0.759393 28.526C0.275538 28.0234 0.00253531 27.3425 -0.00012207 26.6317L-0.00012207 5.36928C0.00319386 4.65868 0.276408 3.97816 0.760121 3.47568C1.24383 2.9732 1.89894 2.68938 2.583 2.68594H4.96432V5.98771C4.96659 6.42912 5.06435 6.86436 5.25036 7.26124C5.43636 7.65812 5.70586 8.0065 6.03894 8.28061C6.63392 8.78076 7.37612 9.05364 8.14151 9.05364C8.9069 9.05364 9.6491 8.78076 10.2441 8.28061C10.5772 8.0065 10.8467 7.65812 11.0327 7.26124C11.2187 6.86436 11.3164 6.42912 11.3187 5.98771V2.68594H16.1293V5.98771C16.1311 6.42894 16.2283 6.86411 16.4139 7.26101C16.5995 7.6579 16.8686 8.00636 17.2014 8.28061C17.7967 8.78097 18.5394 9.05395 19.3052 9.05395C20.071 9.05395 20.8136 8.78097 21.409 8.28061C21.7414 8.00598 22.0102 7.65744 22.1957 7.26063C22.3813 6.86382 22.4788 6.42885 22.4811 5.98771V2.68594H24.9734C25.6577 2.6887 26.3132 2.97229 26.797 3.47492C27.2809 3.97755 27.5539 4.65847 27.5566 5.36928V14.5645C27.1965 14.4194 26.8284 14.2969 26.4542 14.1976V10.453H1.10225V26.0604C1.10755 26.617 1.32359 27.149 1.70363 27.5413C2.08367 27.9336 2.59714 28.1547 3.13292 28.1568H15.4936C15.6805 28.5518 15.8911 28.9343 16.1242 29.3019L16.1217 29.315ZM4.96432 14.7243L5.83713 15.576L7.62564 13.6866C7.80979 13.4901 7.92835 13.3329 8.1579 13.5792L8.91468 14.3653C9.16694 14.6274 9.14423 14.7636 8.91468 14.9995L6.26092 17.6959C5.77659 18.1912 5.85983 18.22 5.36541 17.7143L3.71059 16.0031C3.68651 15.9807 3.66761 15.9529 3.65531 15.9219C3.64302 15.8908 3.63764 15.8573 3.63958 15.8238C3.64152 15.7902 3.65073 15.7576 3.66652 15.7283C3.68232 15.699 3.70428 15.6738 3.73078 15.6546L4.59602 14.7243C4.72467 14.5828 4.83062 14.5907 4.96432 14.7243ZM12.1083 13.5372H15.8114C15.9361 13.5372 16.0557 13.5885 16.1441 13.6798C16.2325 13.7712 16.2825 13.8951 16.2831 14.0247V17.2242C16.2818 17.3538 16.2317 17.4776 16.1435 17.5692C16.0553 17.6608 15.9361 17.7129 15.8114 17.7143H12.1083C11.9834 17.7136 11.8638 17.6617 11.7754 17.57C11.6871 17.4782 11.6372 17.354 11.6365 17.2242V14.0247C11.6379 13.8954 11.6881 13.7718 11.7763 13.6806C11.8646 13.5894 11.9838 13.5379 12.1083 13.5372ZM19.5726 13.5372H23.2757C23.38 13.5381 23.4811 13.5745 23.5635 13.6407C23.646 13.707 23.7053 13.7995 23.7323 13.9041C22.0947 13.9675 20.5004 14.4684 19.1034 15.3585V14.0247C19.1041 13.8951 19.154 13.7712 19.2424 13.6798C19.3308 13.5885 19.4504 13.5372 19.5751 13.5372H19.5726ZM12.1083 20.3373H15.1354C14.7342 21.4555 14.5308 22.6397 14.535 23.833C14.535 24.061 14.535 24.289 14.5577 24.5143H12.1083C11.9834 24.5136 11.8638 24.4618 11.7754 24.3701C11.6871 24.2783 11.6372 24.1541 11.6365 24.0243V20.8274C11.6372 20.6976 11.6871 20.5734 11.7754 20.4816C11.8638 20.3899 11.9834 20.338 12.1083 20.3373ZM4.64647 20.3373H8.34962C8.4122 20.3363 8.47436 20.3482 8.53247 20.3723C8.59057 20.3965 8.64347 20.4324 8.68808 20.478C8.73269 20.5237 8.76812 20.578 8.79229 20.638C8.81647 20.698 8.82892 20.7623 8.82891 20.8274V24.0243C8.82758 24.1552 8.77641 24.2802 8.6866 24.3721C8.59679 24.4639 8.47563 24.515 8.34962 24.5143H4.64899C4.52389 24.5143 4.4039 24.4627 4.31544 24.3708C4.22697 24.2789 4.17727 24.1543 4.17727 24.0243V20.8274C4.17727 20.6974 4.22697 20.5728 4.31544 20.4809C4.4039 20.389 4.52389 20.3373 4.64899 20.3373H4.64647ZM23.1395 20.2247H23.9821C24.057 20.2247 24.1288 20.2556 24.1818 20.3106C24.2348 20.3657 24.2646 20.4403 24.2646 20.5181V23.8933H27.2438C27.3182 23.8933 27.3897 23.9238 27.4426 23.9783C27.4956 24.0328 27.5256 24.1068 27.5263 24.1842V25.062C27.5256 25.1394 27.4956 25.2134 27.4426 25.2678C27.3897 25.3223 27.3182 25.3529 27.2438 25.3529H22.862V20.5181C22.862 20.4408 22.8914 20.3665 22.9439 20.3115C22.9963 20.2566 23.0675 20.2253 23.142 20.2247H23.1395ZM24.0956 18.2934C25.1505 18.2923 26.182 18.6163 27.0597 19.2244C27.9373 19.8325 28.6216 20.6973 29.026 21.7095C29.4304 22.7216 29.5367 23.8356 29.3315 24.9105C29.1263 25.9855 28.6188 26.973 27.8732 27.7483C27.1276 28.5235 26.1774 29.0517 25.1428 29.2658C24.1083 29.48 23.0358 29.3706 22.061 28.9515C21.0863 28.5324 20.2532 27.8223 19.667 26.9112C19.0808 26.0001 18.7679 24.9289 18.7679 23.833C18.7675 23.1057 18.9052 22.3854 19.1729 21.7133C19.4406 21.0412 19.8332 20.4305 20.3282 19.9161C20.8232 19.4016 21.4109 18.9935 22.0577 18.7151C22.7046 18.4367 23.3979 18.2934 24.0981 18.2934H24.0956Z"
                    fill="black" />
                </svg>
                <p>Leave's</p>
              </div>

            </a>
          </li>

          <li class="nav-item centered">
            <a class="nav-link" href="#">

              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 30" fill="none">
                  <path opacity="0.6"
                    d="M7.93253 26.5008L12.6526 22.0845C12.86 21.8896 13.1272 21.7929 13.3944 21.7929L18.0653 21.7916C17.2222 22.1963 16.5121 22.8047 15.9868 23.8845H13.8219L7.65691 29.6536C7.46003 29.8655 7.17527 30 6.85886 30C6.26613 30 5.78519 29.5308 5.78519 28.9525V23.8845H2.60425C1.88707 23.8845 1.23667 23.5964 0.766987 23.1374C0.293784 22.6758 -0.00012207 22.0385 -0.00012207 21.3429V2.54156C-0.00012207 1.84735 0.296597 1.21076 0.769097 0.750463C1.24089 0.289484 1.89339 0 2.60425 0H27.0252C27.736 0 28.3907 0.287426 28.8639 0.749091C29.3343 1.20801 29.6296 1.84254 29.6296 2.54156V9.0035C28.9419 8.53086 28.2233 8.24549 27.4822 8.12407V2.54156C27.4822 2.4222 27.4295 2.31107 27.3458 2.22944C27.2607 2.14643 27.1461 2.09499 27.0252 2.09499H2.60425C2.48542 2.09499 2.37222 2.14781 2.28644 2.23081C2.20136 2.3145 2.14722 2.42494 2.14722 2.54156V21.3429C2.14722 21.4623 2.19996 21.5741 2.28433 21.6571C2.368 21.7387 2.48191 21.7895 2.60425 21.7895H6.85886C7.4516 21.7895 7.93253 22.2587 7.93253 22.837V26.5008ZM17.957 27.7363C17.8079 27.7363 17.687 27.6183 17.687 27.4728C17.687 27.3974 17.6975 27.3233 17.7165 27.2499C18.1496 23.9003 19.667 23.8419 21.576 23.3549C22.1462 23.2102 23.1875 22.9001 23.7936 22.3822C24.1269 22.0961 24.3294 21.747 24.2486 21.3265C23.7873 20.9101 23.4322 20.4587 23.3521 19.5985L23.2972 19.5992C23.1693 19.5978 23.0455 19.5697 22.9302 19.5059C22.6757 19.3646 22.5357 19.0936 22.4689 18.7849C22.3888 18.4165 22.2925 17.3615 22.8071 17.1509L22.8114 17.1495C22.7474 15.9868 22.9492 14.1456 21.725 13.7841C24.141 10.8707 26.9268 9.28612 29.0185 11.8778C31.3487 11.9971 32.3879 15.3481 30.9409 17.1509H30.8797C31.3944 17.3615 31.2974 18.4165 31.2179 18.7849C31.1504 19.0936 31.0112 19.3646 30.7567 19.5059C30.6414 19.5697 30.5176 19.5978 30.3896 19.5992L30.3348 19.5985C30.2546 20.4587 29.8996 20.9101 29.4383 21.3265C29.3575 21.747 29.56 22.0961 29.8932 22.3822C30.4993 22.9001 31.54 23.2102 32.1109 23.3549C34.0199 23.8419 35.5372 23.9003 35.9703 27.2499C35.9893 27.3233 35.9999 27.3974 35.9999 27.4728C35.9999 27.6183 35.8789 27.7363 35.7299 27.7363H17.957ZM7.36933 9.42058C6.7766 9.42058 6.29566 8.95136 6.29566 8.37308C6.29566 7.7948 6.7766 7.32559 7.36933 7.32559H22.0028C22.5962 7.32559 23.0764 7.7948 23.0764 8.37308C23.0764 8.95136 22.5962 9.42058 22.0028 9.42058H7.36933ZM7.37003 15.6212C6.7773 15.6212 6.29636 15.1526 6.29636 14.5737C6.29636 13.9954 6.7773 13.5269 7.37003 13.5269H17.3389C17.9317 13.5269 18.4126 13.9954 18.4126 14.5737C18.4126 15.1526 17.9317 15.6212 17.3389 15.6212H7.37003Z"
                    fill="black" />
                </svg>
                <p>Forum</p>
              </div>

            </a>
          </li>


        </ul>
      </div>
    </div>
  </section>
    );
}