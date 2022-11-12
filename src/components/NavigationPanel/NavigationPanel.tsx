import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import navigationPanelStyles from './NavigationPanel.module.css'

const NavigationPanel = () => {
    return (
        <div className={navigationPanelStyles.NavigationPanel}>
            <BurgerIcon type="primary"/>
            <div className={navigationPanelStyles.NavigationPanelText}><p>Конструктор</p></div>
        </div>

    );
};

export default NavigationPanel;