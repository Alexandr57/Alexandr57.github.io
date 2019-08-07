/*
Title: Game Modes
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.32
Release: 31.10.2018
First release: 10.10.2017
Supported languages: Russian, English
*/

/*ru
Название: Игровые Режимы
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.32
Релиз: 31.10.2018
Первый релиз: 10.10.2017
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.32 Game modes
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools_Game_Modes
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.32
 Release: 31.10.2018
 First release: 10.10.2017
 Supported languages: Russian, English
 Thank you for your support: https://dk-plugins.ru/donate

 ### Requirements and dependencies ###
 Availability of working plugin DKTools version 3.0.0 or above

 ### Instruction ###
 The plugin is compatible with the DKTools Globals plugin and other similar plugins.
 Game modes have the parameter "Required switch".
 This option only works if the DKTools Globals plugin or similar is enabled.
 If you have not installed any of the plugins that keep the switches regardless of the save,
 leave the parameter untouched (value 0)

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free to use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (inform if you do this)
 -Change the plugin code, but you must specify a link to the original plugin

 You can't:
 -Delete or change any information about the plugin (Title, authorship, contact information, version and release)

 * @param Modes
 * @text Game modes
 * @desc Game modes
 * @type struct<Mode>[]

 * @param Text Align
 * @desc Text Align
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left

 * @param Use Mouse Hover
 * @text Mouse Hover
 * @desc Use mouse hover to select a mode?
 * @type boolean
 * @default false

 * @param Use Wheel Scroll
 * @text Wheel Scroll
 * @desc Use wheel scroll to select a mode?
 * @type boolean
 * @default false

 */

/*:ru
 * @plugindesc v.1.32 Игровые режимы
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Game_Modes
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.32
 Релиз: 31.10.2018
 Первый релиз: 10.10.2017
 Поддерживаемые языки: Русский, Английский
 Спасибо за Вашу поддержку: https://dk-plugins.ru/donate

 ### Требования и зависимости ###
 Наличие включенного плагина DKTools версии 3.0.0 или выше

 ### Инструкция ###
 Плагин совместим с плагином DKTools Globals и другими аналогичными плагинами.
 Игровые режимы имеют параметр "Требуемый переключатель".
 Этот параметр работает только, если включен плагин DKTools Globals или аналогичный ему.
 Если у Вас не установлен ни один из плагинов, которые сохраняют переключатели независимо от сохранений,
 то оставьте параметр нетронутым (значение 0)

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (сообщите мне, если Вы перевели плагин на другой язык)
 -Изменять код плагина, но Вы обязаны указать ссылку на оригинальный плагин

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)

 * @param Modes
 * @text Режимы игры
 * @desc Режимы игры
 * @type struct<Mode>[]

 * @param Text Align
 * @text Выравнивание текста
 * @desc Выравнивание текста
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left

 * @param Use Mouse Hover
 * @text Наведение мыши
 * @desc Использовать наведение мыши для выбора режима ?
 * @type boolean
 * @default false

 * @param Use Wheel Scroll
 * @text Прокрутка мышью
 * @desc Использовать прокрутку мышью для выбора режима ?
 * @type boolean
 * @default false

 */

/*~struct~Mode:

 * @param Name
 * @desc Name of the mode

 * @param Switch
 * @text Activable switch
 * @desc Switch that turns on when selecting a mode
 * @type switch
 * @default 0

 * @param Required Switch
 * @desc A switch that is responsible for the availability of the mode. Details in the plugin help
 * @type switch
 * @default 0

 * @param Map Id
 * @text Map
 * @desc Map number to which the player is transferred when selecting a mode
 * @type number
 * @min 1
 * @default 1

 * @param Map X
 * @text Coordinate X
 * @desc Coordinate X on the map where the player is transferred
 * @type number
 * @min 0
 * @default 0

 * @param Map Y
 * @text Coordinate Y
 * @desc Coordinate Y on the map where the player is transferred
 * @type number
 * @min 0
 * @default 0

 */

/*~struct~Mode:ru

 * @param Name
 * @text Название
 * @desc Название режима

 * @param Switch
 * @text Активируемый переключатель
 * @desc Переключатель, который включается при выборе режима
 * @type switch
 * @default 0

 * @param Required Switch
 * @text Требуемый переключатель
 * @desc Переключатель, который отвечает за доступность режима. Подробности в справке плагина
 * @type switch
 * @default 0

 * @param Map Id
 * @text Карта
 * @desc Номер карты, на которую переносится игрок при выборе режима
 * @type number
 * @min 1
 * @default 1

 * @param Map X
 * @text Координата X
 * @desc Координата X на карте, куда переносится игрок
 * @type number
 * @min 0
 * @default 0

 * @param Map Y
 * @text Координата Y
 * @desc Координата Y на карте, куда переносится игрок
 * @type number
 * @min 0
 * @default 0

 */

'use strict';

var Imported = Imported || {};
Imported.DKTools_Game_Modes = 1.32;

if (Imported.DKTools) {
    DKTools.PluginManager.requirePlugin('DKTools', '3.0.0');
} else {
    throw new Error('No plugin "DKTools"! Plugin "DKTools_Game_Modes" will not work!');
}

//===========================================================================
// initialize parameters
//===========================================================================

const GameModesParam = new DKTools.ParameterManager('DKTools_Game_Modes');

//===========================================================================
// Scene_Title
//===========================================================================

const Game_Modes_Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
Scene_Title.prototype.commandNewGame = function() {
    DataManager.createGameObjects();

    const modes = GameModesParam.get('Modes').filter(function(mode) {
        const requiredSwitch = mode['Required Switch'];

        return !requiredSwitch || $gameSwitches.value(requiredSwitch);
    });

    if (modes.length === 0) {
        Game_Modes_Scene_Title_commandNewGame.call(this);
    } else {
        DataManager.setupNewGame();
        this._commandWindow.close();
        this._commandWindow.hide();
        this.createGameModesWindow(modes);
    }
};

Scene_Title.prototype.createGameModesWindow = function(choices) {
    const x = this._commandWindow.x;
    const y = this._commandWindow.y;
    const width = this._commandWindow.width;
    const height = this._commandWindow.height;

    this._gameModeWindow = new DKTools.Window.Selectable(x, y, width, height);

    this._gameModeWindow.openness = 0;

    const contentsSprite = this._gameModeWindow.contentsSprite;
    const align = GameModesParam.get('Text Align');
    const items = choices.map(modeObj => ({
        name: modeObj.Name,
        symbol: 'ok',
        ext: modeObj,
        handler: (index) => {
            const ext = contentsSprite.getItemExt(index);
            const switchId = ext.Switch;

            if (switchId > 0) {
                $gameSwitches.setValue(switchId, true);
            }

            $gamePlayer.reserveTransfer(ext['Map Id'], ext['Map X'], ext['Map Y']);

            this._gameModeWindow.close();
        },
    }));
    const drawHandler = function(index) {
        const name = this.getItemName(index);
        const align = this.getItemAlign(index);
        const rect = this.getItemRectForText(index);
        const nameWidth = this.getTextWidthEx(name);

        let x = rect.x;

        if (align === 'center') {
            x += (rect.width - nameWidth) / 2;
        } else if (align === 'right') {
            x += rect.width - nameWidth;
        }

        this.drawTextEx(name, { x, y: rect.y });
    }.bind(contentsSprite);

    contentsSprite.setupIndex(0);
    contentsSprite.setupItems(items);
    contentsSprite.setupItemAlign(align);

    if (DKTools.VERSION >= '6.1.0') {
        contentsSprite.setupItemDrawHandler(drawHandler);
    } else {
        contentsSprite.processDrawIcon = function(iconIndex, textState) {
            this.drawIcon(iconIndex, { x: textState.x + 2, y: textState.y + 2 });

            textState.x += Window_Base._iconWidth + 4;
        }.bind(contentsSprite);

        contentsSprite.setupDrawItemHandler(drawHandler);
    }

    contentsSprite.setHandler('cancel', () => {
        this._gameModeWindow.close();

        this._commandWindow.openness = 0;
        this._commandWindow.show();
        this._commandWindow.open();
        this._commandWindow.activate();

        this._windowLayer.removeChild(this._gameModeWindow);

        this._gameModeWindow = null;
    });

    contentsSprite.enableOption('process-mouse');

    if (GameModesParam.get('Use Mouse Hover')) {
        contentsSprite.enableOption('process-mouse-hover');
    }

    if (GameModesParam.get('Use Wheel Scroll')) {
        contentsSprite.enableOption('process-wheel-scroll');
    }

    this._gameModeWindow.start(true);

    this._gameModeWindow.addEvent({
        type: 'close',
        onUpdate: () => {
            this.fadeOutAll();

            SceneManager.goto(Scene_Map);
        }
    });

    this._gameModeWindow.open();

    this.addWindow(this._gameModeWindow);
};