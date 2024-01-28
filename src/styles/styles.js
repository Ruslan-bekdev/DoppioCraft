import {css} from "styled-components";

export const colors = {
    main: '#351C0F',
    mainRGB: '53,28,15',
    secondary: '#E9E9E9',
    secondaryRGB: '233,233,233',
};

export const container = css`
    width: 100vw;
    max-width: 840px;
    margin-inline: auto;
    text-align: center;
    box-sizing: border-box;
`;
export const imageDefault = css`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
`;

// флекс позиционирование
export const justifyCenter_around = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const justifyCenter_between = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const flexCenter_wrap = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
export const flexCenter_column = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const flexStart = css`
    display: flex;
    align-items: center;
    justify-content: start;
`;
export const flexEnd = css`
    display: flex;
    align-items: center;
    justify-content: end;
`;

// остальное позиционирование
export const center_relative = css`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const bottomStart_relative = css`
    position: relative;
    bottom: 0;
    left: 0;
`;
export const center_absolute = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const centerY_relative = css`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;
export const centerY_absolute = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
export const bottomStart_fixed = css`
    position: fixed;
    bottom: 0;
    left: 0;
`;
export const center_fixed = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const start_relative = css`
    position: relative;
    top: 0;
    left: 0;
`;
export const start_absolute = css`
    position: absolute;
    top: 0;
    left: 0;
`;
export const start_fixed = css`
    position: fixed;
    top: 0;
    left: 0;
`;