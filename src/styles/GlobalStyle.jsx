import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    font-family: "Pretendard-Regular";
		box-sizing: border-box;
}

:root {

/* fonts */
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
      font-family: "UhBeeSeulvely";
      src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSeulvely.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }


/* font sizes */
--font-size-xxl: 32px;
--font-size-xl: 24px;
--font-size-l: 20px;
--font-size-ml: 18px;
--font-size-m: 16px;
--font-size-s: 12px;
--font-size-xs: 8px;

/* Colors */
--color-white: #fff;
--color-gray: #bbb;
--color-black: #000;
--color-green-main: #D3E4CD;
--color-green-dark: #AECDA2;
--color-background: #FAF9EE;
--color-yellow: #FFF9BD;
--color-pink: #FFD6BA;


/* Gaps */
--gap-9xs: 4px;
--gap-5xs: 8px;
--gap-3xs: 10px;
--gap-base: 16px;
--gap-xl: 20px;
--gap-13xl: 32px;
--gap-17xl: 36px;
--gap-21xl: 40px;

/* Paddings */
--padding-9xs: 4px;
--padding-5xs: 8px;
--padding-3xs: 10px;
--padding-xs: 12px;
--padding-base: 16px;
--padding-xl: 20px;
--padding-5xl: 24px;
--padding-13xl: 32px;
--padding-41xl: 60px;
--padding-45xl: 64px;

/* Border radiuses */
--br-8xs: 5px;
--br-3xs: 10px;
--br-mini: 15px;
--br-xl: 20px;

--header-h: 64px;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
    margin: 0; line-height: normal;
}

a {
	text-decoration: none;
	color: inherit;
}
a:visited {
    color: inherit;
} 
`;