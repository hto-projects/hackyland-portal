import BookPage from "./BookPage";
import PrizeBox from "../components/PrizeBox";

const Prizes = () => {
  const marqueePrizes = [
    {
      name: "Teenage Engineering PO 33",
      link: "https://www.amazon.com/engineering-Operator-Sequencer-Recording-Microphone/dp/B079M56Z4G?crid=KI6AGPH5L6NR&dib=eyJ2IjoiMSJ9.qx2AmYfPGAYpBirYEqEMniiRB7e5CbNPcgVFp9xhDctZ05FaAKWbfxCXNb7iaYtITsTxUmdMUOutaJihsXF3N5EpZXve9rkwXhdI6qA1C7VtWh2WzVo3xoduqcLV6oRINH9EQ6i21SmkY396KCBuy6TBjkTXTg7UCU0zVfn0Wxs.rLCUhpN9n9LNnaJa1qRc5JcJ_fFU_Eu9xBtsRNnaSUE&dib_tag=se&keywords=teenage%2Bengineering%2Bpo%2B33&qid=1730470671&sprefix=teenage%2Bengineering%2Bpo%2B3%2Caps%2C158&sr=8-1&th=1",
      image: "/PrizePics/TeenageTransparent.png",
      description: "a micro sampler with up to 40 sec sample memory and built-in microphone, making it easy to make music on the go."
    },
    {
      name: "Blue Yeti Microphone",
      link: "https://www.amazon.com/Logitech-Creators-Microphone-Podcasting-Play-Midnight/dp/B00N1YPXW2?crid=1FV9G2H3L35AW&dib=eyJ2IjoiMSJ9.UGml0UMOuLKdaKGhIdchw9S02gL-4hM6TRgtoc7qemCn6E0O1ZpS0UVz-YbolB_sZjX9ycyhsQxgL7sSyPdCIj9MGFvOvU-bTMCdtg47qzHlFCcGroyfelHbr0YlqsZL4FRpz5ytq_q5vjnjg6nNXeMRaDmJwRp6axTewebl_YtuhwiuLbcjOgvh6zgy_qDcOshqFbIQoh4losjjXfJgUvZ6cK0f3tOyE-EOx7aSPn4.yZjUoHPnXBgRvZWsWBSqfD4EKw_siNm6hEEVVhGOqkY&dib_tag=se&keywords=podcasting%2Bmicrophone&qid=1730494129&sprefix=podcasting%2Bmicrophon%2Cspecialty-aps%2C113&sr=8-1&ufe=INHOUSE_INSTALLMENTS%3AUS_IHI_3M_HARDLINES_AUTOMATED&th=1",
      image: "/PrizePics/YetiTransparent.png",
      description: "a premium USB microphone, producing clear, powerful, broadcast-quality sound for music, podcasts, Twitch streaming, YouTube videos, and Zoom calls"
    },
    {
      name: "Retro Game Handheld",
      link: "https://www.amazon.com/Anbernic-Handheld-Console-Consoles-Classic/dp/B0BX45W9GL?crid=T0NAQOB9VOET&dib=eyJ2IjoiMSJ9.iTwq1RM2bwmDzmBSp9tL8_FQmk2WqPYx6m--fpzKueLC4cfTZJxlDAQldn39DC7Skic23wlFMB_z6OffAT7kl68mq6NkulY-u4KZSSe34v91JemT_P7rZfi2FG0aPpJfBYo25K3ApnPxSMhFXsgAbPsqQIcY6TGpqf35x_Lp72xcWpENqRHR7JlL9c6pAuINqmhWaz1PxBUYBcFgiXk3nO-tHpNsDOV7v7BTC39MOHICcWkydqBLVsLBBEmNqAKsNCC-GFNqeCUkduvqrIWUkm34nJPOgZAH5zb34EK88c4.xrkRfgzqF6pVN6mjHteTfRjzUcyBWYGnQ4caJnb0x8Y&dib_tag=se&keywords=retro%2Bgames%2Bhandheld&qid=1730495547&sprefix=retro%2Bgames%2Bhandheld%2Caps%2C129&sr=8-7&th=1",
      image: "/PrizePics/RetroTransparent.png",
      description: "a handheld game console packed with over 5000 classic retro games from PS1, GBA, and more."
    },
    {
      name: "Walkie Talkie Set",
      link: "https://www.amazon.com/NXGKET-Talkies-Weather-Rechargeable-Channel/dp/B0CGV655GC?crid=AZV51HJ310LN&dib=eyJ2IjoiMSJ9.omAPP4D9vYPfBVOMoyeiU9NZ6JOhqZKZkTT48uUVbmfeS2DpYNivAHBfm7EOIX3gefiFFgF2BJpMF0kmfcKnAnIUF2MwN_ptyubY-bBRS0rsmxAqPQZpqMqEsIx3DcUDnWjItSFLn1_4257vw1JhDZoGJdyVLssnKOPiEsVki25lAh8SvYfjtSUPCCC6xDaEXA6BVXX3yOmqex71hQUWTPCf19jWsZ22IAsl_wdn5Yw.r1Gd0eqeXO6oqvll6pgldqtkiQ9Mg7zwno9dp6caSZY&dib_tag=se&keywords=walkie%2Btalkies&qid=1730495927&sprefix=walkie%2Btalkie%2Caps%2C149&sr=8-21&th=1",
      image: "/PrizePics/WalkieTransparent.png",
      description: "a four pack of walkie talkies with up to five mile range, 3-4 day battery life, and USB-C charging."
    },
    {
      name: "Arduino Starter Kit",
      link: "https://www.amazon.com/Arduino-Starter-Kit-English-Official/dp/B009UKZV0A?ref_=ast_sto_dp",
      image: "/PrizePics/ArduinoTransparent.png",
      description: "everything you need to get started building your own physical computing projects, including a 170-page project book and 15 different projects."
    },
    {
      name: "ImagiCharm",
      link: "https://www.amazon.com/imagiLabs-imagiCharm-Accessory-Program-Straight/dp/B089NWTY45?crid=3ZTLY3YLHNBK&dib=eyJ2IjoiMSJ9.eu_5Yz8epf7GVKOQF1e2B7Q9bUrrMj_xlfdsjq6cQNdNcTdD7hbGnFX0-Gy_uvm_6ZqYtYFBJccZ8C42vQejoSNeHkMW2EXporXf-B7y8-zevvl7JAGEd95gkxMPBvq_XC1VZrh5RNLkqYiS-ooqvTso0o2_eXkfqeAAmhWQfhnG6C8GuHEVhlKDmZaELN0VT1xFbKLpF_QXKb14LvpNCdcPApwEfhWXYYkWZ-qpXTvKGPHwQFu91K6gGTq2siniMmerwT9igByNhXFLyAQzi1KZvfNLQnLMtVn3o1v44uc.DvIXvAHd3981xm8pXhC6aTiW9IgPXRBHw7gJwRc6a7M&dib_tag=se&keywords=gadget&qid=1730494518&refinements=p_36%3A5800-10000&rnid=386465011&sprefix=gadget%2Caps%2C271&sr=8-86",
      image: "/PrizePics/ImagiTransparent.png",
      description: "a programmable device that brings creative projects and designs coded in Python to life."
    },
    {
      name: "Pixel Art Display",
      link: "https://www.amazon.com/Divoom-Pixoo-Max-Programmable-Decoration-Advertisement/dp/B08D2Z2N87?ref_=Oct_d_Oct_d_ss_d_172623_2&pd_rd_w=ccVBG&content-id=amzn1.sym.359b6746-8aba-45dc-ab9a-73f3c64ff12b&pf_rd_p=359b6746-8aba-45dc-ab9a-73f3c64ff12b&pf_rd_r=2QSJME549KZ2WE6P02ZV&pd_rd_wg=Suvf6&pd_rd_r=f00943a0-5bfd-4000-acca-218c6cbb01b7&pd_rd_i=B08D2Z2N87",
      image: "/PrizePics/PixelArtTransparent.png",
      description: "a 9.6 inch LED screen for creating and displaying your own pixel art on a 32x32 grid."
    },
    {
      name: "Kodak Photo Printer",
      link: "https://www.amazon.com/KODAK-68-Sheet-2-1x3-4-Portable-Printer/dp/B08FST3H95?crid=3ZTLY3YLHNBK&dib=eyJ2IjoiMSJ9._wwFTztYkF_fqhGR_PH8UtU27JvLkqTR8aDPO0SX7bUjqV-XT4ymz7O25wG7C-Ge68AMIcbCzEXvafypDgFek53HeHuCT-j0wBV5DIfjN659-wVkMogR0A3kU1pEERyUutHxWdKzGSf9dftpg1SYi53iQSi3qKRNkUHPUnqupINoxThWwxspLgJmPJ-cvJB2RfZGNQV47vbLdgPFf1udf6kSSTQc7tfY3Hr3l_GaXp05hfVqpQZ4456wRA4gJ7um4i8N9AtIRlUaEb6AzpofYVjwY0qeLDBxgrMgeU18Xbw.fRbS8mATQMJSsUQaP5GU6YmLIFnVyJJDGinYCcqZme4&dib_tag=se&keywords=gadget&qid=1730494437&refinements=p_36%3A5800-10000&rnid=386465011&sprefix=gadget%2Caps%2C271&sr=8-51&th=1",
      image: "/PrizePics/KodakTransparent.png",
      description: "a high-quality photo printer that connects to your phone via Bluetooth and comes with 68 sheets to get started."
    }
  ];

  /* An array of prize objects, each with a name, link, image, and description property. one for each of these: 
  
  Item	Link
Stanley Quencher	https://www.amazon.com/Quencher-FlowState-Stainless-Insulated-Smoothie/dp/B0CP9Z56SW?crid=36GHCZNQVTH89&dib=eyJ2IjoiMSJ9.rVQgCJ3ozxugvKxlxKPumLvBEYpq5iopQRtMbQcroInSnuQukd2nRzafma6s7k1ew0JpYWhTenXqR81timt1MwNtjBJ8PNsu8sv5PVyPbjMKI_mlgzDHi4DwTLEwXIm4CZlP9xk1O-rXix754i0RtQ46Bn8YFDjkZoX1H-IC5tKcohPTW49NexcP68M2Ux0wP90cfZalhZWRz3GgQ6ewUhWdWH04W29smiJcGbjZ6fhtdJq0xm625mgKuUc5LUwRZ1VDUdjcz5AZQC-tgu_naLz0_2rOp_pZ5F5_X803vCs.cOB92o2_46B9DYjg4Peuwz01Ms0FrGjJxX8JOm5hdds&dib_tag=se&keywords=stanley&qid=1730470113&sprefix=stanley%2Caps%2C142&sr=8-5&th=1
Carhartt Beanie	https://www.amazon.com/Carhartt-Acrylic-Watch-Black-Size/dp/B002G9UEFY?crid=MIPR8J36HJ1P&dib=eyJ2IjoiMSJ9.wKSS6Qmd_TCwxpSSL0tv269dJUZiQkMELzsywjkaPcYnavsToXU9p7AkxBqjFNmqtPh-_T8XO2g20Xh0KdZ3btROO5FCVGjSl_180bca-eHJQ_HzoKuRsiTYoyxymlCheas_ZHjsZ-kX9PhUqGCcAebWgpl7kwjVaoqD1sGjQcwXaHHTNNL67dK0Msnxeg3fMrcEDQ4tyKVZiwGg1TS7VEfxdAx7voWdbIE0RVcH5OleU8C0VQwVaIQbwNtfyUcWzXQmeT7aEZWtcbP9VZ0_FvNdIrfw4wmC8HjOwMPWyfw.d0OPoeK_6zTr3S4gmlcPMDMTL8sVz-qKoJovxF1rwac&dib_tag=se&keywords=carhartt%2Bknit%2Bcuffed%2Bbeanie&qid=1730470235&sprefix=carhartt%2Bknit%2Bcuffed%2Bbeanie%2Caps%2C128&sr=8-1&th=1&psc=1
Galaxy Projector	https://www.amazon.com/SFOUR-Projector-Astronaut-Birthdays-Valentines/dp/B0CXXLGJ2F?crid=12JZJE36TEYVU&dib=eyJ2IjoiMSJ9.n45zVF3uff6zAmLSoKoWs8lznOPoUUrpkaDYp_X7tk_Cq29J3QM4y093LnDZULaiZeBekq2Ows5QNDNL2qtQl8JNVxK1Ytqr9_ZdsFMJ6H5vXjSCrV2N2baZW2MnYSh1w54MWj-yLJZgmR9BN9m472uJvYBjQYX-Xzy38cWOMS5Oa5BjSI_rsyAjsNrgiC1r83YzA6-jKFdXYt7nKDklwXx6f9u6703mzXXNBBGKsyz-5jkoxuYZAzjDCljt7atUQ5UDlq2g8libDjBlRFHRb2uaxkLMHs32OH_iA0lJEfs.sT1-WPLuCq6BRB4xombFw4a5weXJkZ5gpAlGeaneWqA&dib_tag=se&keywords=sfour+galaxy+projector+night+light+and+speaker&qid=1730470927&sprefix=sfour+galaxy%2Caps%2C123&sr=8-1
Micro Game Pad	https://www.amazon.com/8Bitdo-Micro-Bluetooth-Pocket-sized-Controller-Switch-Raspberry-Nintendo/dp/B0CDG5HCCH?crid=2EX9D33YPBTF&dib=eyJ2IjoiMSJ9.VhhXPxcqu5BvjZWZT8X10GEgUwhV2qicHHey1OuSm7AH8iYz9__w_o9ELZj041V1Pa5Qr2QZ_x3-EoZPKTfTsTt7dL_Z-2Mm0QHDO2jvFVLdiU9UDX2infpzOIGCt-Lr5xzLFxBpa4Oivh61MKiZc4VrWwART5d3WG8HGPQGBci_KZvmMDR0F9c6Fl2u_eLwfa5IOh9tMQJj6Qcnsu26GvMaWHPc-tJpN8CH7ZzNpA4.FNYd9B4_XrwUNFGiKCiTHtA8EBbrJpe2r0r2P_lyqG8&dib_tag=se&keywords=8bitdo+micro+bluetooth+gamepad&qid=1730471276&sprefix=8bitdo+micro+blut%2Caps%2C126&sr=8-3
JBL Portable Bluetooth	https://www.amazon.com/s?k=jbl+go+3+portable+bluetooth+speaker&crid=3SC9WH9S2N79Q&sprefix=jbl+go+3+por%2Caps%2C133&ref=nb_sb_ss_ts-doa-p_2_12
Drawing Tablet	https://www.amazon.com/StarG640-Ultrathin-Graphics-Battery-Free-Pressure/dp/B078YR2MTF?crid=A63Q3RQ2MBC&dib=eyJ2IjoiMSJ9.6LO8KwVdvc55WMslgVkUs_NPvGpS7hVOHThtvsbyD57QWgb8KT39TaUmfTTebBpkGkgP5RNR2ws1TfpR6GtsiI-NjalqTV0o2_8Hlhk8kfoViV3NnHPt1TOv35guWMh2Gt59wIphxwkYNZOkPkkvhnJ9N194LuCbXrNLYO5kwCPw1SOIWiwTdJttSY03iI3wNrG86yHe1TSpTSRy-LQcW-S1hl1bvfWiwI6yNrHO5Mw.366i9emT87g8jciJVe7rVBBRB-StSG29EOtVin9BJmo&dib_tag=se&keywords=digital+note+taking&qid=1730737185&refinements=p_36%3A-5000&rnid=386442011&sprefix=digital+note+takin%2Caps%2C147&sr=8-5
3D Pen	https://www.amazon.com/SCRIB3D-Advanced-Printing-Pen-Display/dp/B08HM3X3D3?crid=103GX0RZZUU9A&dib=eyJ2IjoiMSJ9.OFI4FRz-5xvGOeZjKHWLgSHJycd9muE_hgVrLtm_k5Evp51wuLbxATuZsm1VPYurB949-TnP2sU16PCydjc2JnXoohJnqE9Xd82-9ZiSCNwKAUMOPY5ucO93M8eyH8ZcFRQgNtNVfT4Fyr7g8QZhA03ToIUKrQiCYQ2I-rsHPUrhDSeU3aQgUjtS7MJsJxTq0CD1oUokhmkPzrLMu7woP-8eVw-lDNbRoI5XM1RYJW4.RvJGEYfDd4dp4_a1yo1AlkwXvu1G2SLCAshwpVN42Yw&dib_tag=se&keywords=3d+pen&qid=1730737684&sprefix=3d+pen%2Caps%2C176&sr=8-5
Wearable Blanket	https://www.amazon.com/COMFY-Original-Oversized-Blanket-Sweatshirt/dp/B07S651GSW?crid=20Z6FK120KDEO&dib=eyJ2IjoiMSJ9.SpGtbj-_xhOjq0QGxAhseiGqVG1qnmEL_38iheyKpsdkpt5ebfh2nFLQAT4iT-HHieSgfrhuhaKVEPtFFvnpBTpU6Q0Lr9RncUlEjVU4H5px4VisVvSgR5_LNkmSh75Zx-C6h72g0oa8bE6orms1aSDXnLaJQTK11Uej0UDdWn_N_Y-0ebFyNM25tWQvgIjhkKmcsisdeTqXLpCJXzQeePvSeeG33yz9sCOLBMOyiGCpJvJ96eZNoxkeP392_FdwE2ueoubjLudJ9gZx-FoeFCZVsjkTzDo8vi85bddAaKA.GmgXc1Fm3wHGcZAmllB4Bt38BkIP1sCVgM_rPCh2nlw&dib_tag=se&keywords=snuggie&qid=1730737800&sprefix=snuggi%2Caps%2C133&sr=8-8
ZipString	https://www.amazon.com/ZipString-Experience-Tank-Featured-Illuminating-Propeller/dp/B0BS73XFT2?crid=1T4XUW88S0EWN&dib=eyJ2IjoiMSJ9.2vjFaPGEeQuL7JaMY95FDfCBBEsO8lEBfeSNImH9hYC3J04CoDJD8bNNiICzcwy_jkwNW-W4aGxQmsoRmKAcGL7uO6BZ_StTE9mJVT2Xu1AibHtJA2pM5ognRHVAqRBrzOMuDaYQM-fBzmiZj_Iz0tped5T2cByjk3dLAjwp7yuWLZz_TYyr46cgj-eESUvyirl9tJ60Ducm2eNyHUsENJeEFE8zU7x-6f5ftFqFZ7_4nczaMGXXLV0WQabWYTYCsKa9590EfI40RoUwpfEqUyFejlrdCbrBW3O23Ifq94k.KiQIUUEhKfXxxQGqGBRxVHG2XGpeAtbXLgXRxW6JBfQ&dib_tag=se&keywords=zipstring&qid=1730737996&sprefix=zipstr%2Caps%2C163&sr=8-5&th=1
  
  */
const superlativePrizes = [
  {
    name: "Stanley Quencher",
    link: "https://www.amazon.com/Quencher-FlowState-Stainless-Insulated-Smoothie/dp/B0CP9Z56SW?crid=36GHCZNQVTH89&dib=eyJ2IjoiMSJ9.rVQgCJ3ozxugvKxlxKPumLvBEYpq5iopQRtMbQcroInSnuQukd2nRzafma6s7k1ew0JpYWhTenXqR81timt1MwNtjBJ8PNsu8sv5PVyPbjMKI_mlgzDHi4DwTLEwXIm4CZlP9xk1O-rXix754i0RtQ46Bn8YFDjkZoX1H-IC5tKcohPTW49NexcP68M2Ux0wP90cfZalhZWRz3GgQ6ewUhWdWH04W29smiJcGbjZ6fhtdJq0xm625mgKuUc5LUwRZ1VDUdjcz5AZQC-tgu_naLz0_2rOp_pZ5F5_X803vCs.cOB92o2_46B9DYjg4Peuwz01Ms0FrGjJxX8JOm5hdds&dib_tag=se&keywords=stanley&qid=1730470113&sprefix=stanley%2Caps%2C142&sr=8-5&th=1",
    image: "/PrizePics/StanleyTransparent.png",
    description: "a 40 oz stainless steel tumbler with double-wall vacuum insulation to keep drinks cold for hours."
  },
  {
    name: "Carhartt Beanie",
    link: "https://www.amazon.com/Carhartt-Acrylic-Watch-Black-Size/dp/B002G9UEFY?crid=MIPR8J36HJ1P&dib=eyJ2IjoiMSJ9.wKSS6Qmd_TCwxpSSL0tv269dJUZiQkMELzsywjkaPcYnavsToXU9p7AkxBqjFNmqtPh-_T8XO2g20Xh0KdZ3btROO5FCVGjSl_180bca-eHJQ_HzoKuRsiTYoyxymlCheas_ZHjsZ-kX9PhUqGCcAebWgpl7kwjVaoqD1sGjQcwXaHHTNNL67dK0Msnxeg3fMrcEDQ4tyKVZiwGg1TS7VEfxdAx7voWdbIE0RVcH5OleU8C0VQwVaIQbwNtfyUcWzXQmeT7aEZWtcbP9VZ0_FvNdIrfw4wmC8HjOwMPWyfw.d0OPoeK_6zTr3S4gmlcPMDMTL8sVz-qKoJovxF1rwac&dib_tag=se&keywords=carhartt%2Bknit%2Bcuffed%2Bbeanie&qid=1730470235&sprefix=carhartt%2Bknit%2Bcuffed%2Bbeanie%2Caps%2C128&sr=8-1&th=1&psc=1",
    image: "/PrizePics/CarharttTransparent.png",
    description: "a classic acrylic watch hat that is warm and comfortable for cold weather."
  },
  {
    name: "Galaxy Projector",
    link: "https://www.amazon.com/SFOUR-Projector-Astronaut-Birthdays-Valentines/dp/B0CXXLGJ2F?crid=12JZJE36TEYVU&dib=eyJ2IjoiMSJ9.n45zVF3uff6zAmLSoKoWs8lznOPoUUrpkaDYp_X7tk_Cq29J3QM4y093LnDZULaiZeBekq2Ows5QNDNL2qtQl8JNVxK1Ytqr9_ZdsFMJ6H5vXjSCrV2N2baZW2MnYSh1w54MWj-yLJZgmR9BN9m472uJvYBjQYX-Xzy38cWOMS5Oa5BjSI_rsyAjsNrgiC1r83YzA6-jKFdXYt7nKDklwXx6f9u6703mzXXNBBGKsyz-5jkoxuYZAzjDCljt7atUQ5UDlq2g8libDjBlRFHRb2uaxkLMHs32OH_iA0lJEfs.sT1-WPLuCq6BRB4xombFw4a5weXJkZ5gpAlGeaneWqA&dib_tag=se&keywords=sfour+galaxy+projector+night+light+and+speaker&qid=1730470927&sprefix=sfour+galaxy%2Caps%2C123&sr=8-1",
    image: "/PrizePics/GalaxyTransparent.png",
    description: "a galaxy projector that creates a starry night sky on your ceiling with multiple colors and patterns."
  },
  {
    name: "Micro Game Pad",
    link: "https://www.amazon.com/8Bitdo-Micro-Bluetooth-Pocket-sized-Controller-Switch-Raspberry-Nintendo/dp/B0CDG5HCCH?crid=2EX9D33YPBTF&dib=eyJ2IjoiMSJ9.VhhXPxcqu5BvjZWZT8X10GEgUwhV2qicHHey1OuSm7AH8iYz9__w_o9ELZj041V1Pa5Qr2QZ_x3-EoZPKTfTsTt7dL_Z-2Mm0QHDO2jvFVLdiU9UDX2infpzOIGCt-Lr5xzLFxBpa4Oivh61MKiZc4VrWwART5d3WG8HGPQGBci_KZvmMDR0F9c6Fl2u_eLwfa5IOh9tMQJj6Qcnsu26GvMaWHPc-tJpN8CH7ZzNpA4.FNYd9B4_XrwUNFGiKCiTHtA8EBbrJpe2r0r2P_lyqG8&dib_tag=se&keywords=8bitdo+micro+bluetooth+gamepad&qid=1730471276&sprefix=8bitdo+micro+blut%2Caps%2C126&sr=8-3",
    image: "/PrizePics/MicroGamePadTransparent.png",
    description: "a pocket-sized Bluetooth gamepad compatible with Switch, Raspberry Pi, and more."
  },
  {
    name: "JBL Portable Bluetooth",
    link: "https://www.amazon.com/s?k=jbl+go+3+portable+bluetooth+speaker&crid=3SC9WH9S2N79Q&sprefix=jbl+go+3+por%2Caps%2C133&ref=nb_sb_ss_ts-doa-p_2_12",
    image: "/PrizePics/JBLTransparent.png",
    description: "a compact and waterproof Bluetooth speaker with powerful sound and up to 5 hours of playtime."
  },
  {
    name: "Drawing Tablet",
    link: "https://www.amazon.com/StarG640-Ultrathin-Graphics-Battery-Free-Pressure/dp/B078YR2MTF?crid=A63Q3RQ2MBC&dib=eyJ2IjoiMSJ9.6LO8KwVdvc55WMslgVkUs_NPvGpS7hVOHThtvsbyD57QWgb8KT39TaUmfTTebBpkGkgP5RNR2ws1TfpR6GtsiI-NjalqTV0o2_8Hlhk8kfoViV3NnHPt1TOv35guWMh2Gt59wIphxwkYNZOkPkkvhnJ9N194LuCbXrNLYO5kwCPw1SOIWiwTdJttSY03iI3wNrG86yHe1TSpTSRy-LQcW-S1hl1bvfWiwI6yNrHO5Mw.366i9emT87g8jciJVe7rVBBRB-StSG29EOtVin9BJmo&dib_tag=se&keywords=digital+note+taking&qid=1730737185&refinements=p_36%3A-5000&rnid=386442011&sprefix=digital+note+takin%2Caps%2C147&sr=8-5",
    image: "/PrizePics/DrawingTabletTransparent.png",
    description: "a battery-free graphics tablet with 8192 levels of pressure sensitivity for digital art and note-taking."
  },
  {
    name: "3D Pen",
    link: "https://www.amazon.com/SCRIB3D-Advanced-Printing-Pen-Display/dp/B08HM3X3D3?crid=103GX0RZZUU9A&dib=eyJ2IjoiMSJ9.OFI4FRz-5xvGOeZjKHWLgSHJycd9muE_hgVrLtm_k5Evp51wuLbxATuZsm1VPYurB949-TnP2sU16PCydjc2JnXoohJnqE9Xd82-9ZiSCNwKAUMOPY5ucO93M8eyH8ZcFRQgNtNVfT4Fyr7g8QZhA03ToIUKrQiCYQ2I-rsHPUrhDSeU3aQgUjtS7MJsJxTq0CD1oUokhmkPzrLMu7woP-8eVw-lDNbRoI5XM1RYJW4.RvJGEYfDd4dp4_a1yo1AlkwXvu1G2SLCAshwpVN42Yw&dib_tag=se&keywords=3d+pen&qid=1730737684&sprefix=3d+pen%2Caps%2C176&sr=8-5",
    image: "/PrizePics/3DPenTransparent.png",
    description: "a 3D printing pen with adjustable temperature and speed for creating 3D models and art."
  },
  {
    name: "Wearable Blanket",
    link: "https://www.amazon.com/COMFY-Original-Oversized-Blanket-Sweatshirt/dp/B07S651GSW?crid=20Z6FK120KDEO&dib=eyJ2IjoiMSJ9.SpGtbj-_xhOjq0QGxAhseiGqVG1qnmEL_38iheyKpsdkpt5ebfh2nFLQAT4iT-HHieSgfrhuhaKVEPtFFvnpBTpU6Q0Lr9RncUlEjVU4H5px4VisVvSgR5_LNkmSh75Zx-C6h72g0oa8bE6orms1aSDXnLaJQTK11Uej0UDdWn_N_Y-0ebFyNM25tWQvgIjhkKmcsisdeTqXLpCJXzQeePvSeeG33yz9sCOLBMOyiGCpJvJ96eZNoxkeP392_FdwE2ueoubjLudJ9gZx-FoeFCZVsjkTzDo8vi85bddAaKA.GmgXc1Fm3wHGcZAmllB4Bt38BkIP1sCVgM_rPCh2nlw&dib_tag=se&keywords=snuggie&qid=1730737800&sprefix=snuggi%2Caps%2C133&sr=8-8",
    image: "/PrizePics/WearableBlanketTransparent.png",
    description: "an oversized wearable blanket that combines the warmth of a blanket with the comfort of a hoodie."
  },
  {
    name: "ZipString",
    link: "https://www.amazon.com/ZipString-Experience-Tank-Featured-Illuminating-Propeller/dp/B0BS73XFT2?crid=1T4XUW88S0EWN&dib=eyJ2IjoiMSJ9.2vjFaPGEeQuL7JaMY95FDfCBBEsO8lEBfeSNImH9hYC3J04CoDJD8bNNiICzcwy_jkwNW-W4aGxQmsoRmKAcGL7uO6BZ_StTE9mJVT2Xu1AibHtJA2pM5ognRHVAqRBrzOMuDaYQM-fBzmiZj_Iz0tped5T2cByjk3dLAjwp7yuWLZz_TYyr46cgj-eESUvyirl9tJ60Ducm2eNyHUsENJeEFE8zU7x-6f5ftFqFZ7_4nczaMGXXLV0WQabWYTYCsKa9590EfI40RoUwpfEqUyFejlrdCbrBW3O23Ifq94k.KiQIUUEhKfXxxQGqGBRxVHG2XGpeAtbXLgXRxW6JBfQ&dib_tag=se&keywords=zipstring&qid=1730737996&sprefix=zipstr%2Caps%2C163&sr=8-5&th=1",
    image: "/PrizePics/ZipStringTransparent.png",
    description: "a fun and interactive toy that uses a string to create mesmerizing shapes and patterns."
  }
];

  return <BookPage className="prizes-page">
    <h1>Prize Catalog</h1>
    <p><em>Note: Exact prizes are subject to change depending on availability and price shifts.</em></p>
    
    <div className="category-container marquee">
      <h2>Marquee Awards</h2>
      <p className="sub">Each project will be eligible for the following Marquee Award categories:</p>
      <div className="marquee-boxes">
        <div>
          <p>
          <b>Most Impressive MVP: </b>
          Mentors choose the project that impresses them the most. They will consider actual working functionality, as well as technical ingenuity and overall quality.
          </p>
        </div>
        <div>
          <p>
          <b>Most Outstanding Original Work: </b>
          Mentors choose the project that demonstrates the best possible work of its creators. The project stands out in the showcase for its unique perspective, engaging presentation, and effortful originality.</p>
        </div>
        <div>
        <p><b>Student Choice: </b>
Students vote on their favorite projects in the showcase. After the other two Marquee Awards have been given, the remaining project with the most student votes wins this award. <em>Note: for a team to be eligble, ALL members of the time must submit ALL FIVE (5) of their votes for other projects.</em>
</p>
        </div>
      </div>
      <h3>Prizes</h3>
      <p>Each member of a Marquee Award-winning team will pick one of these prizes:</p>
      <div className="prizes-container">
        {marqueePrizes.map((prize, idx) => (
          <PrizeBox key={idx} prize={prize} />
        ))}
      </div>
    </div>

    <div className="category-container superlative">
      <h2>Superlative Awards</h2>
      <p>Superlative Awards will be given at the discretion of the mentors, and are not guaranteed. <em>Want to nominate someone for a Superlative Award? Fill out <a href="https://forms.office.com/r/up8sMPBuid" target="_blank" rel="noreferrer" style={{color: "var(--light-blue)", fontStyle: "italic", fontWeight: "bold", fontSize: "1.1em"}}>this form!</a></em></p>
      <h3>Prizes</h3>
      <p>Superlative Award winners will pick one of these prizes:</p>
      <div className="prizes-container">
        {superlativePrizes.map((prize, idx) => (
          <PrizeBox key={idx} prize={prize} />
        ))}
      </div>
    </div>
  </BookPage>
}

export default Prizes;
