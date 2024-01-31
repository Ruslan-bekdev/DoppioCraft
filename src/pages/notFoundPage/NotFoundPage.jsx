import React from 'react';
import styled from "styled-components";

const Error = styled.div`
  text-align: center;
`;

const NotFoundPage = () => {
    return (
        <Error
            className='container'
        >
            <h2>Ошибка!</h2>
            <p>
                При перезагрузке любой страницы, кроме Главной происходит ошибка 404 (страница не найдена).
                <br/>
                Сейчас я нахожусь в поиске причины проблемы
            </p>
            <h3>
                А пока вы можете вернуться на главную через заголовок "Doppio Craft" в меню
            </h3>
        </Error>
    );
};

export default NotFoundPage;