//=============================================================================
// AL7_SnowPrincessPlugin.js
//=============================================================================

/*:ru
 * @plugindesc AL7_SnowPrincessPlugin v1.0 Плагин для игры Snow_Princess
 * @author Alexandr_7
 * @help
 
 ### Информация о плагине ###
 Название: AL7_SnowPrincessPlugin
 Автор: Alexandr_7
 Сайт: https://vk.com/borisov_alexandr_5
 Версия: 1.0
 Поддерживаемые языки: Русский
 
 ### Лицензия и правила использования плагина ###
 
 Плагин разработан чисто для игры и не предусматривает использования в других проектах!
 Если вам он нужен то действуют следующие правило:
 
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить на другие языки или полностью поменять текст плагина (сообщите мне, если Вы это сделали)
 -Изменять код плагина, но Вы обязаны указать ссылку на оригинальный плагин
 -Изменять имя, версию и авторов проекта под свой проект.
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 
 ---------------------------------
 Скрипты плагина
 ---------------------------------
 
 //Получить рандомное число
 $script.getRandomInRange(1, 100);
 
 //Получить true или false
 $script.coinTossBool();
 
 
 
 //Включить или отключить локальный переключатель у события
 setSelfSwitches(ИД События, 'A-D', true или false (По умолчанию true), (Отключение остальных локальных переключателей. По умолчанию false), ИД Карты (необязательно)); - 
 Пример:
 $script.setSelfSwitches(1, 'A');
 или
 $script.setSelfSwitches(1, 'A', true, true);
 Если нужно указать другую карту то:
 $script.setSelfSwitches(1, 'A', true, false, 2);
 или
 $script.setSelfSwitches(1, 'A', true, true, 2);
 
 //Полчить значение локального переключателя у события
 isSelfSwitches(ИД События, 'A-D', ИД Карты (необязательно)) - 
 Пример:
 $script.isSelfSwitches(1, 'A')
 или
 $script.isSelfSwitches(1, 'A', 2)
 
 //Включить или отключить локальный переключатель у нескольких событий
 setArraySelfSwitches(ИД События Start, ИД События End, 'A-D', true или false (По умолчанию true), (Отключение остальных локальных переключателей. По умолчанию false), ИД Карты (необязательно)) - 
 Пример:
 $script.setArraySelfSwitches(1, 5, 'A');
 или
 $script.setArraySelfSwitches(1, 5, 'A', true, true);
 Если нужно указать другую карту то:
 $script.setArraySelfSwitches(1, 5, 'A', true, false, 2);
 или
 $script.setArraySelfSwitches(1, 5, 'A', true, true, 2);
 
 //Проверка включен или выключен ли локальный переключатель у всех событий
 isArraySelfSwitches(ИД События Start, ИД События End, 'A-D', true или false (По умолчанию true) ИД Карты (необязательно)) - 
 Пример:
 $script.isArraySelfSwitches(1, 5, 'A', false)
 или
 $script.isArraySelfSwitches(1, 5, 'A', false, 2)
 
 * @param WaitScrollMap
 * @text Прокрутка карты
 * @default ---------------------------------
 *
 * @param Enable_Switch_Wait_Scroll_Map
 * @parent WaitScrollMap
 * @type switch
 * @desc Вкл / Выкл ожидания завершения прокрутки (номер переключателя)
 * @text Ожидание прокрутки карты
 * @default 1
 *
 * @param MiniGameTicTacToe
 * @text Мини игра - Крестики нолики
 * @default ---------------------------------
 *
 * @param Enable_Player_Toe_TicTacToe
 * @parent MiniGameTicTacToe
 * @type switch
 * @desc Вкл / Выкл игрок играет за нолика
 * @text Игрок играет за нолика
 * @default 2
 * 
 * @param Jump2System
 * @text Система особых прыжков
 * @default ---------------------------------
 * 
 * @param Enable_WindowJump
 * @parent Jump2System
 * @type switch
 * @desc Вкл / Выкл окно для системы прыжков
 * @text Окно для системы прыжков
 * @default 3
 * 
 */

//---------------------------------
//Код плагина игры
//---------------------------------

var SPProject = {};

SPProject.authorGame =
    "Движок: RPG Maker MV (JS, HTML5)!\nРазработчик: Alexandr_7!\nПомощь в создании графики: Sando\nСоздания диалогов: Plagiumll!";

SPProject.gameName = "Снежная царевна. Другая история (Demo).";

SPProject.gameVersion = "Альфа 4";

SPProject.gameNameVersion =
    SPProject.gameName + " Версия: " + SPProject.gameVersion;

SPProject.versionPlugin = "1.0";

SPProject.parameters = PluginManager.parameters("AL7_SnowPrincessPlugin");
//Крестики Нолики
SPProject.enablePlayerToeTicTacToe = Number(
    SPProject.parameters["Enable_Player_Toe_TicTacToe"]
);
//
//SPProject.enableSwitchWaitScrollMap = Number(SPProject.parameters['Enable_Switch_Wait_Scroll_Map']);

SPProject.selfSwitches = ["A", "B", "C", "D"];

//#region Класс с дополнительными скриптами

SPProject.scripts = class {
    static getAuthorGame() {
        return SPProject.authorGame;
    }

    static getVersionPlugin() {
        return SPProject.versionPlugin;
    }

    static getNameProject() {
        return SPProject.gameName;
    }

    static getVersionProject() {
        return SPProject.gameNameVersion;
    }

    static getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static coinTossBool() {
        return Math.floor(Math.random() * 2) === 0;
    }

    static getArraySyperAtack(LengthArray, min, max) {
        var arr = new Array(LengthArray);

        for (var i = min; i <= max; i++) arr.push(i);

        var rnd = Math.floor(Math.random() * (max + 1 - min) + min);

        arr.splice(arr.indexOf(rnd), 1);
        arr.sort(function() {
            return Math.random() - 0.5;
        });

        return arr;
    }

    static isSetUpperCaseSelfSwitches(selfSwitch) {
        selfSwitch = selfSwitch.toUpperCase();
        return SPProject.selfSwitches.includes(selfSwitch);
    }

    //Задать локальный переключатель событию
    static setSelfSwitches(
        idEvent,
        selfSwitch,
        onSelfSwitch = true,
        offOtherSelfSwitch = false,
        mapID = $gameMap.mapId()
    ) {
        if (!this.isSetUpperCaseSelfSwitches(selfSwitch)) return;

        var key = [mapID, idEvent, selfSwitch];
        $gameSelfSwitches.setValue(key, onSelfSwitch);
        if (offOtherSelfSwitch) {
            SPProject.selfSwitches.forEach(function(element) {
                if (element != selfSwitch) {
                    var key2 = [mapID, idEvent, element];
                    $gameSelfSwitches.setValue(key2, false);
                }
            });
        }
    }

    //Задать локальный переключатель событиям
    static setArraySelfSwitches(
        idEventStart,
        idEventStop,
        selfSwitch,
        onSelfSwitch = true,
        offOtherSelfSwitch = false,
        mapID = $gameMap.mapId()
    ) {
        if (!this.isSetUpperCaseSelfSwitches(selfSwitch)) return;

        var key;
        for (var i = idEventStart; i <= idEventStop; i++) {
            this.setSelfSwitches(
                i,
                selfSwitch,
                onSelfSwitch,
                offOtherSelfSwitch,
                mapID
            );
        }
    }

    //Проверка локального переключателя у события
    static isSelfSwitches(idEvent, selfSwitch, mapID = $gameMap.mapId()) {
        if (!this.isSetUpperCaseSelfSwitches(selfSwitch)) return;

        var key = [mapID, idEvent, selfSwitch];
        return $gameSelfSwitches.value(key);
    }

    //Проверка локального переключателя у событий
    static isArraySelfSwitches(
        idEventStart,
        idEventStop,
        selfSwitch,
        isSelfSwitchs = true,
        mapID = $gameMap.mapId()
    ) {
        if (!this.isSetUpperCaseSelfSwitches(selfSwitch)) return;

        var key;
        var a = 0,
            b = 0;
        for (var i = idEventStart; i <= idEventStop; i++) {
            key = [mapID, i, selfSwitch];

            a++;

            if ($gameSelfSwitches.value(key) === isSelfSwitchs) {
                b++;
            }
        }

        return a === b;
    }

    //#region Для игры - Крестики Нолики

    //Скрипт проверки для игры крестики ноллики
    static ifTicTacToe(
        idEventStart,
        selfSwitchCross = "B",
        selfSwitchToe = "C",
        selfSwitchDraw = "A"
    ) {
        //Начало ИД Событий 1 линии
        var idEventLine1 = idEventStart;
        //Начало ИД Событий 2 линии
        var idEventLine2 = idEventLine1 + 3;
        //Начало ИД Событий 3 линии
        var idEventLine3 = idEventLine2 + 3;
        //Проверка
        //Если победили крестики
        if (
            this.isArraySelfSwitches(
                idEventLine1,
                idEventLine1 + 2,
                selfSwitchCross,
                true
            ) ||
            this.isArraySelfSwitches(
                idEventLine2,
                idEventLine2 + 2,
                selfSwitchCross,
                true
            ) ||
            this.isArraySelfSwitches(
                idEventLine3,
                idEventLine3 + 2,
                selfSwitchCross,
                true
            ) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross))
        )
            return "x";
        //Если победили нолики
        else if (
            this.isArraySelfSwitches(
                idEventLine1,
                idEventLine1 + 2,
                selfSwitchToe,
                true
            ) ||
            this.isArraySelfSwitches(
                idEventLine2,
                idEventLine2 + 2,
                selfSwitchToe,
                true
            ) ||
            this.isArraySelfSwitches(
                idEventLine3,
                idEventLine3 + 2,
                selfSwitchToe,
                true
            ) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe))
        )
            return "0";
        //Если ничья
        else if (
            this.isArraySelfSwitches(
                idEventStart,
                idEventStart + 8,
                selfSwitchDraw,
                false
            )
        )
            return "+";
        //В остальных случаях (если остались ходы)
        else return "-";
    }

    //Получения хода для нолика с проверкой на ход врага
    static getCellMoveHardTicTacToe(
        idEventStart,
        selfSwitchCross = "B",
        selfSwitchToe = "C",
        selfSwitchDraw = "A"
    ) {
        //Начало ИД Событий 1 линии
        var idEventLine1 = idEventStart;
        //Начало ИД Событий 2 линии
        var idEventLine2 = idEventLine1 + 3;
        //Начало ИД Событий 3 линии
        var idEventLine3 = idEventLine2 + 3;
        //Проверка на ходы крестика
        //По горизонтали
        //1 Линия
        //Если игрок играет за нолики
        if ($gameSwitches.value(SPProject.enablePlayerToeTicTacToe)) {
            //Проверка на победный ход соперника
            //По горизонтали
            //1 Линия
            if (
                this.isArraySelfSwitches(
                    idEventLine1,
                    idEventLine1 + 1,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine1 + 1,
                    idEventLine1 + 2,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine2,
                    idEventLine2 + 1,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine2 + 1,
                    idEventLine2 + 2,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine3,
                    idEventLine3 + 1,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine3 + 1,
                    idEventLine3 + 2,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            //2 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            //По диагонали
            //1 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //2 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //Проверка на победный ход игрока
            //По горизонтали
            //1 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine1,
                    idEventLine1 + 1,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine1 + 1,
                    idEventLine1 + 2,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine2,
                    idEventLine2 + 1,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine2 + 1,
                    idEventLine2 + 2,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine3,
                    idEventLine3 + 1,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine3 + 1,
                    idEventLine3 + 2,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            //2 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            //По диагонали
            //1 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //2 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            else return this.getRandomInRange(idEventStart, idEventStart + 8);
        }
        //Если игрок играет за крестики
        else {
            //Проверка куда ходить сопернику
            //По горизонтали
            //1 Линия
            if (
                this.isArraySelfSwitches(
                    idEventLine1,
                    idEventLine1 + 1,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine1 + 1,
                    idEventLine1 + 2,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine2,
                    idEventLine2 + 1,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine2 + 1,
                    idEventLine2 + 2,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine3,
                    idEventLine3 + 1,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine3 + 1,
                    idEventLine3 + 2,
                    selfSwitchToe,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            //2 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            //По диагонали
            //1 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //2 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //Проверка на ходы игрока
            //По горизонтали
            //1 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine1,
                    idEventLine1 + 1,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine1 + 1,
                    idEventLine1 + 2,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine2,
                    idEventLine2 + 1,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine2 + 1,
                    idEventLine2 + 2,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (
                this.isArraySelfSwitches(
                    idEventLine3,
                    idEventLine3 + 1,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isArraySelfSwitches(
                    idEventLine3 + 1,
                    idEventLine3 + 2,
                    selfSwitchCross,
                    true
                ) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2, selfSwitchDraw)
            )
                return idEventLine2;
            //2 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            else if (
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Строка
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw)
            )
                return idEventLine2 + 2;
            //По диагонали
            //1 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw)
            )
                return idEventLine3 + 2;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1, selfSwitchDraw)
            )
                return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //2 Диагональ
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchDraw)
            )
                return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)
            )
                return idEventLine1 + 2;
            else if (
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //В остальных случаях
            else return this.getRandomInRange(idEventStart, idEventStart + 8);
        }

        //#endregion
    }
};

//#endregion

//---------------------------------
//Уменьшители
//---------------------------------

var $script = SPProject.scripts;

//------------------------------------
//Переназначенные функции RPG Maker MV
//------------------------------------

//#region Для уровня прыжков

//#endregion

/*

Game_Interpreter.prototype.command204 = function() {
	if (!$gameParty.inBattle()) {
		if ($gameMap.isScrolling()) {
			this.setWaitMode('scroll');
			return false;
		}
		$gameMap.startScroll(this._params[0], this._params[1], this._params[2]);
		if ($gameSwitches.value(SPProject.enableSwitchWaitScrollMap)) {
			this.setWaitMode('scroll');
		}
	}
	return true;
};

*/