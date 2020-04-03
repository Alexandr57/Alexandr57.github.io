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

 //Мини игра Крестики нолики:

 Мини игра крестики нолики устроена на событиях и локальных переключателях
 Всего 9 событий которые должны идти по порядку и 3 локальных переключателей для каждого события
 
 //Начало игры
 $script.StartTicTacToe(Стартовый номер события, , Локальный переключатель крестика (по умолчанию B), Локальный переключатель нолика (по умолчанию C), Локальный переключатель дефолта (по умолчанию A));

 //Проверка резльтата игры крестики нолики:
 $script.ifTicTacToe(Стартовый номер события, Локальный переключатель крестика (по умолчанию B), Локальный переключатель нолика (по умолчанию C), Локальный переключатель дефолта (по умолчанию A));
 Вернет:
 "x" если победили крестики
 "0" если победили нолики
 "+" если ничья
 "-" если остались ходы
 Пример использования:
 В проверки условий скрипт
 $script.ifTicTacToe(1) === "x"
 $script.ifTicTacToe(1) === "0"
 $script.ifTicTacToe(1) === "+"
 $script.ifTicTacToe(1) === "-"
 В скрипте
 if ($script.ifTicTacToe(1) === "x"){
	 //Действие если победили крестики
 } else if ($script.ifTicTacToe(1) === "0"){
	 //Действие если победили нолики
 } else if ($script.ifTicTacToe(1) === "0"){
	 //Действие если ничья
 } else {
	 //Действие если остались ходы
 }

 //Получения хода для ИИ крестиков ноликов
 $script.getCellMoveTicTacToe(Стартовый номер события, Локальный переключатель крестика (по умолчанию B), Локальный переключатель нолика (по умолчанию C), Локальный переключатель дефолта (по умолчанию A));
 Вернет:
 Номер события на которое нужно будет переместить ИИ
 Пример использования
 В присвоении переменной
 $script.getCellMoveTicTacToe(1);
 В скрипте
 if ($script.getCellMoveTicTacToe(1) === 1){
	 //Действие если победили крестики
 } else if ($script.getCellMoveTicTacToe(1) === 2){
	 //Действие если победили нолики
 } else if ($script.getCellMoveTicTacToe(1) === 3){
	 //Действие если победили нолики
 } else if ($script.getCellMoveTicTacToe(1) === 4){
	 //Действие если победили нолики
 } else if ($script.getCellMoveTicTacToe(1) === 5){
	 //Действие если победили нолики
 } else if ($script.getCellMoveTicTacToe(1) === 6){
	 //Действие если победили нолики
 } else if ($script.getCellMoveTicTacToe(1) === 7){
	 //Действие если победили нолики
 } else if ($script.getCellMoveTicTacToe(1) === 8){
	 //Действие если победили нолики
 } else if ($script.getCellMoveTicTacToe(1) === 9){
	 //Действие если победили нолики
 }

 //Ожидание анимации в кадрах:
 $script.waitAnimationFrame(Количество кадров анимации);
 Пример использования
 $script.waitAnimationFrame(5);
 Будет ждать 5 кадров анимации.

 $script.runCommonEvent(Номер общего события);
 Пример использования
 $script.runCommonEvent();
 $script.runCommonEvent(1);
 $script.runCommonEvent(53); // Прыжок вниз
 $script.runCommonEvent(54); // Прыжок влево
 $script.runCommonEvent(55); // Прыжок вправо
 $script.runCommonEvent(56); // Прыжок вверх

 Проверка решена ли мозайка 
 $script.isPuzzleDone(Количество элементов пазла (Не обязательно), Стартовый номер события (Не обязательнно));
 Пример
 $script.isPuzzleDone()
 или
 $script.isPuzzleDone(25)
 или
 $script.isPuzzleDone(25, 5)

 Растановка пазлов в рандомном порядке
 $script.setPuzzles(Количество элементов пазла (Не обязательно), Стартовый номер события (Не обязательнно));
 $script.setPuzzles();
 или
 $script.setPuzzles(25);
 или
 $script.setPuzzles(25, 5);
 
 Получить имя выпавшего рандомного файла
 $script.getFileNamePuzzle()

 * @param Enable_Debug
 * @type boolean
 * @on Вкл
 * @off Выкл
 * @desc Вкл / Выкл дебаг режим
 * @text Дебаг режим
 * @default false
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
 * @text Вкл / Выкл Игрок играет за нолика
 * @default 2
 * 
 * @param Var_TypeLevel
 * @parent MiniGameTicTacToe
 * @desc Переменная уровня сложности
 * @text Переменная уровня сложности
 * @type variable
 * @default 3
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
 * @param WaitAnimationFrame
 * @text Переменные для ожидания анимации
 * @default ---------------------------------
 * 
 * @param Var_FrameAnimation
 * @parent WaitAnimationFrame
 * @desc Переменная количества кадров анимации в 1 сек
 * @text Переменная количества кадров анимации в 1 сек
 * @type variable
 * @default 1
 * 
 * @param Var_FrameGame
 * @parent WaitAnimationFrame
 * @desc Переменная количества кадров игры в 1 сек
 * @text Переменная количества кадров игры в 1 сек
 * @type variable
 * @default 2
 * 
 * @param MiniGamePuzzles
 * @text Мини игра мозайка
 * @default ---------------------------------
 * 
 * @param VarRndPuzzles
 * @parent MiniGamePuzzles
 * @desc Переменная Радндомного ID пазлов
 * @text Переменная Радндомного ID пазлов
 * @type variable
 * @default 4
 * 
 * @param RndPuzzles
 * @parent MiniGamePuzzles
 * @desc Количество рандомных пазлов
 * @text Количество рандомных пазлов
 * @type struct<StructCountRndPuzzles>
 * @default {"minNumberRndPuzzles":"1","maxNumberRndPuzzles":"2","fileNamePuzzles":"[\"!$Puzzle_1_\",\"!$Puzzle_2_\"]"}
 * 
 * @param IDRegionRndPuzzles
 * @parent MiniGamePuzzles
 * @desc Регион для рандмного спавна пазлов
 * @text Регион для рандмного спавна пазлов
 * @type number
 * @min 1
 * @max 255
 * @default 50
 */

/*~struct~StructCountRndPuzzles:ru
 * @param minNumberRndPuzzles
 * @text Минимальное число пазлов
 * @desc Минимальное число пазлов
 * @type number
 * @min 1
 * @default 1
 *
 * @param maxNumberRndPuzzles
 * @text Максимальное число пазлов
 * @desc Максимальное число пазлов
 * @type number
 * @min 1
 * @default 2
 *
 * @param fileNamePuzzles
 * @desc Имена файлов картинок пазлов
 * @text Имена файлов картинок пазлов
 * @type string[]
 * @default ["!$Puzzle_1_","!$Puzzle_2_"]
 */

//---------------------------------
//Код плагина игры
//---------------------------------

var SPProject = {};

SPProject.JSONParse = function(string) {
    try {
        if (Number.isFinite(string) || typeof string === "boolean") {
            return string;
        }

        return JSON.parse(string, (key, value) => {
            if (Array.isArray(value)) {
                return value.map(val => SPProject.JSONParse(val));
            } else {
                try {
                    return SPProject.JSONParse(value);
                } catch (e) {
                    return value;
                }
            }
        });
    } catch (e) {
        return string;
    }
};

SPProject.myParam = true;

SPProject.authorGame = "Движок: RPG Maker MV (JS, HTML5)!\nРазработчик: Alexandr_7!\nПомощь в создании графики: Sando\nСоздания диалогов: Plagiumll!";

SPProject.gameName = "Снежная царевна. Другая история (Demo).";

SPProject.gameVersion = "Альфа 4";

SPProject.gameNameVersion = SPProject.gameName + " Версия: " + SPProject.gameVersion;

SPProject.versionPlugin = "1.0";

SPProject.parameters = PluginManager.parameters("AL7_SnowPrincessPlugin");

SPProject.debugMode = Boolean(SPProject.parameters["Enable_Debug"]);

SPProject.ArrKey = ["left", "up", "right", "down"];

//------------------
// ! Крестики Нолики
//------------------

SPProject.enablePlayerToeTicTacToe = Number(SPProject.parameters["Enable_Player_Toe_TicTacToe"]);

SPProject.varTypeLevel = Number(SPProject.parameters["Var_TypeLevel"]);

//---------------------------
// ! Ожидание кадров анимации
//---------------------------

SPProject.varFrameAnimation = Number(SPProject.parameters["Var_FrameAnimation"]);

SPProject.varFrameGame = Number(SPProject.parameters["Var_FrameGame"]);

//----------
// ! Мозайка
//----------

SPProject.mgPuzzle = {};

SPProject.mgPuzzle.varRndPuzzles = Number(SPProject.parameters["VarRndPuzzles"]);
SPProject.mgPuzzle.rndPuzzles = SPProject.JSONParse(SPProject.parameters["RndPuzzles"]);
SPProject.mgPuzzle.idRegionRndPuzzles = Number(SPProject.parameters["IDRegionRndPuzzles"]);

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

    static getLengthVarArray(varArr) {
        return varArr.length;
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
    static setSelfSwitches(idEvent, selfSwitch, onSelfSwitch = true, offOtherSelfSwitch = false, mapID = $gameMap.mapId()) {
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
    static setArraySelfSwitches(idEventStart, idEventStop, selfSwitch, onSelfSwitch = true, offOtherSelfSwitch = false, mapID = $gameMap.mapId()) {
        if (!this.isSetUpperCaseSelfSwitches(selfSwitch)) return;

        var key;
        for (var i = idEventStart; i <= idEventStop; i++) {
            this.setSelfSwitches(i, selfSwitch, onSelfSwitch, offOtherSelfSwitch, mapID);
        }
    }

    //Проверка локального переключателя у события
    static isSelfSwitches(idEvent, selfSwitch, mapID = $gameMap.mapId()) {
        if (!this.isSetUpperCaseSelfSwitches(selfSwitch)) return;

        var key = [mapID, idEvent, selfSwitch];
        return $gameSelfSwitches.value(key);
    }

    //Проверка локального переключателя у событий
    static isArraySelfSwitches(idEventStart, idEventStop, selfSwitch, isSelfSwitchs = true, mapID = $gameMap.mapId()) {
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

    //#region Для стелс режима

    static isPlayerRadiusEvent(idEvent, rLeft, rUp, rRight, rDown) {
        var evX = $gameMap.event(idEvent).x;
        var evY = $gameMap.event(idEvent).y;
        var plX = $gamePlayer.x;
        var plY = $gamePlayer.y;
        if (SPProject.debugMode === true) {
        }
        return plX >= evX - rLeft && plX <= evX + rRight && plY >= evY - rUp && plY <= evY + rDown;
    }

    static eventStels(idEvent, selfSwitch = "A") {
        if ($gameMap.event(idEvent).direction() === 2) {
            if (this.isPlayerRadiusEvent(idEvent, 1, 1, 1, 2)) this.setSelfSwitches(idEvent, selfSwitch);
        } else if ($gameMap.event(idEvent).direction() === 4) {
            if (this.isPlayerRadiusEvent(idEvent, 2, 1, 1, 1)) this.setSelfSwitches(idEvent, selfSwitch);
        } else if ($gameMap.event(idEvent).direction() === 6) {
            if (this.isPlayerRadiusEvent(idEvent, 1, 1, 2, 1)) this.setSelfSwitches(idEvent, selfSwitch);
        } else {
            if (this.isPlayerRadiusEvent(idEvent, 1, 2, 1, 1)) this.setSelfSwitches(idEvent, selfSwitch);
        }
    }

    static eventStels2(idEvent, aRadius = 2, selfSwitch = "A") {
        if (this.isPlayerRadiusEvent(idEvent, aRadius, aRadius, aRadius, aRadius)) this.setSelfSwitches(idEvent, selfSwitch);
    }

    //#endregion

    //#region Для игры - Крестики Нолики

    static startTicTacToe(idEventStart, selfSwitchCross = "B", selfSwitchToe = "C", selfSwitchDraw = "A") {
        this.setArraySelfSwitches(idEventStart, idEventStart + 8, "A", true, true);
    }

    //Скрипт проверки для игры крестики ноллики
    static ifTicTacToe(idEventStart, selfSwitchCross = "B", selfSwitchToe = "C", selfSwitchDraw = "A") {
        //Начало ИД Событий 1 линии
        var idEventLine1 = idEventStart;
        //Начало ИД Событий 2 линии
        var idEventLine2 = idEventLine1 + 3;
        //Начало ИД Событий 3 линии
        var idEventLine3 = idEventLine2 + 3;
        //Проверка
        //Если победили крестики
        if (
            this.isArraySelfSwitches(idEventLine1, idEventLine1 + 2, selfSwitchCross, true) ||
            this.isArraySelfSwitches(idEventLine2, idEventLine2 + 2, selfSwitchCross, true) ||
            this.isArraySelfSwitches(idEventLine3, idEventLine3 + 2, selfSwitchCross, true) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchCross) && this.isSelfSwitches(idEventLine2, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) && this.isSelfSwitches(idEventLine2 + 1, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchCross))
        )
            return "x";
        //Если победили нолики
        else if (
            this.isArraySelfSwitches(idEventLine1, idEventLine1 + 2, selfSwitchToe, true) ||
            this.isArraySelfSwitches(idEventLine2, idEventLine2 + 2, selfSwitchToe, true) ||
            this.isArraySelfSwitches(idEventLine3, idEventLine3 + 2, selfSwitchToe, true) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchToe) && this.isSelfSwitches(idEventLine2, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1, selfSwitchToe) && this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) && this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe)) ||
            (this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) && this.isSelfSwitches(idEventLine2 + 1, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchToe))
        )
            return "0";
        //Если ничья
        else if (this.isArraySelfSwitches(idEventStart, idEventStart + 8, selfSwitchDraw, false)) return "+";
        //В остальных случаях (если остались ходы)
        else return "-";
    }

    static getCellMoveTicTacToe_Easy(idEventStart, selfSwitchDraw = "A") {
        var _id = 0;
        do {
            _id = this.getRandomInRange(idEventStart, idEventStart + 8);
        } while (this.isSelfSwitches(_id, selfSwitchDraw) === false);
        return _id;
    }

    //Получения хода для нолика с проверкой на ход врага
    static getCellMoveTicTacToe_Hard(idEventStart, selfSwitchCross = "B", selfSwitchToe = "C", selfSwitchDraw = "A") {
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
        if ($gameSwitches.value(SPProject.enablePlayerToeTicTacToe) === true) {
            //Проверка на победный ход соперника
            //По горизонтали
            //1 Линия
            if (this.isArraySelfSwitches(idEventLine1, idEventLine1 + 1, selfSwitchCross, true) && this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)) return idEventLine1 + 2;
            else if (this.isArraySelfSwitches(idEventLine1 + 1, idEventLine1 + 2, selfSwitchCross, true) && this.isSelfSwitches(idEventLine1, selfSwitchDraw)) return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (this.isArraySelfSwitches(idEventLine2, idEventLine2 + 1, selfSwitchCross, true) && this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw))
                return idEventLine2 + 2;
            else if (this.isArraySelfSwitches(idEventLine2 + 1, idEventLine2 + 2, selfSwitchCross, true) && this.isSelfSwitches(idEventLine2, selfSwitchDraw)) return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (this.isArraySelfSwitches(idEventLine3, idEventLine3 + 1, selfSwitchCross, true) && this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw))
                return idEventLine3 + 2;
            else if (this.isArraySelfSwitches(idEventLine3 + 1, idEventLine3 + 2, selfSwitchCross, true) && this.isSelfSwitches(idEventLine3, selfSwitchDraw)) return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (this.isSelfSwitches(idEventLine1, selfSwitchCross) && this.isSelfSwitches(idEventLine2, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchDraw))
                return idEventLine3;
            else if (this.isSelfSwitches(idEventLine2, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchCross) && this.isSelfSwitches(idEventLine1, selfSwitchDraw))
                return idEventLine1;
            else if (this.isSelfSwitches(idEventLine1, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchCross) && this.isSelfSwitches(idEventLine2, selfSwitchDraw))
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
            else if (this.isArraySelfSwitches(idEventLine1, idEventLine1 + 1, selfSwitchToe, true) && this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw))
                return idEventLine1 + 2;
            else if (this.isArraySelfSwitches(idEventLine1 + 1, idEventLine1 + 2, selfSwitchToe, true) && this.isSelfSwitches(idEventLine1, selfSwitchDraw)) return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (this.isArraySelfSwitches(idEventLine2, idEventLine2 + 1, selfSwitchToe, true) && this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw))
                return idEventLine2 + 2;
            else if (this.isArraySelfSwitches(idEventLine2 + 1, idEventLine2 + 2, selfSwitchToe, true) && this.isSelfSwitches(idEventLine2, selfSwitchDraw)) return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (this.isArraySelfSwitches(idEventLine3, idEventLine3 + 1, selfSwitchToe, true) && this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw))
                return idEventLine3 + 2;
            else if (this.isArraySelfSwitches(idEventLine3 + 1, idEventLine3 + 2, selfSwitchToe, true) && this.isSelfSwitches(idEventLine3, selfSwitchDraw)) return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (this.isSelfSwitches(idEventLine1, selfSwitchToe) && this.isSelfSwitches(idEventLine2, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchDraw))
                return idEventLine3;
            else if (this.isSelfSwitches(idEventLine2, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchToe) && this.isSelfSwitches(idEventLine1, selfSwitchDraw))
                return idEventLine1;
            else if (this.isSelfSwitches(idEventLine1, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchToe) && this.isSelfSwitches(idEventLine2, selfSwitchDraw))
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
            else return this.getCellMoveTicTacToe_Easy(idEventStart, selfSwitchDraw);
        }
        //Если игрок играет за крестики
        else {
            //Проверка куда ходить сопернику
            //По горизонтали
            //1 Линия
            if (this.isArraySelfSwitches(idEventLine1, idEventLine1 + 1, selfSwitchToe, true) && this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw)) return idEventLine1 + 2;
            else if (this.isArraySelfSwitches(idEventLine1 + 1, idEventLine1 + 2, selfSwitchToe, true) && this.isSelfSwitches(idEventLine1, selfSwitchDraw)) return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (this.isArraySelfSwitches(idEventLine2, idEventLine2 + 1, selfSwitchToe, true) && this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw))
                return idEventLine2 + 2;
            else if (this.isArraySelfSwitches(idEventLine2 + 1, idEventLine2 + 2, selfSwitchToe, true) && this.isSelfSwitches(idEventLine2, selfSwitchDraw)) return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (this.isArraySelfSwitches(idEventLine3, idEventLine3 + 1, selfSwitchToe, true) && this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw))
                return idEventLine3 + 2;
            else if (this.isArraySelfSwitches(idEventLine3 + 1, idEventLine3 + 2, selfSwitchToe, true) && this.isSelfSwitches(idEventLine3, selfSwitchDraw)) return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchToe) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (this.isSelfSwitches(idEventLine1, selfSwitchToe) && this.isSelfSwitches(idEventLine2, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchDraw))
                return idEventLine3;
            else if (this.isSelfSwitches(idEventLine2, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchToe) && this.isSelfSwitches(idEventLine1, selfSwitchDraw))
                return idEventLine1;
            else if (this.isSelfSwitches(idEventLine1, selfSwitchToe) && this.isSelfSwitches(idEventLine3, selfSwitchToe) && this.isSelfSwitches(idEventLine2, selfSwitchDraw))
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
            else if (this.isArraySelfSwitches(idEventLine1, idEventLine1 + 1, selfSwitchCross, true) && this.isSelfSwitches(idEventLine1 + 2, selfSwitchDraw))
                return idEventLine1 + 2;
            else if (this.isArraySelfSwitches(idEventLine1 + 1, idEventLine1 + 2, selfSwitchCross, true) && this.isSelfSwitches(idEventLine1, selfSwitchDraw)) return idEventLine1;
            else if (
                this.isSelfSwitches(idEventLine1, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine1 + 1, selfSwitchDraw)
            )
                return idEventLine1 + 1;
            //2 Линия
            else if (this.isArraySelfSwitches(idEventLine2, idEventLine2 + 1, selfSwitchCross, true) && this.isSelfSwitches(idEventLine2 + 2, selfSwitchDraw))
                return idEventLine2 + 2;
            else if (this.isArraySelfSwitches(idEventLine2 + 1, idEventLine2 + 2, selfSwitchCross, true) && this.isSelfSwitches(idEventLine2, selfSwitchDraw)) return idEventLine2;
            else if (
                this.isSelfSwitches(idEventLine2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine2 + 1, selfSwitchDraw)
            )
                return idEventLine2 + 1;
            //3 Линия
            else if (this.isArraySelfSwitches(idEventLine3, idEventLine3 + 1, selfSwitchCross, true) && this.isSelfSwitches(idEventLine3 + 2, selfSwitchDraw))
                return idEventLine3 + 2;
            else if (this.isArraySelfSwitches(idEventLine3 + 1, idEventLine3 + 2, selfSwitchCross, true) && this.isSelfSwitches(idEventLine3, selfSwitchDraw)) return idEventLine3;
            else if (
                this.isSelfSwitches(idEventLine3, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 2, selfSwitchCross) &&
                this.isSelfSwitches(idEventLine3 + 1, selfSwitchDraw)
            )
                return idEventLine3 + 1;
            //По вертикали
            //1 Строка
            else if (this.isSelfSwitches(idEventLine1, selfSwitchCross) && this.isSelfSwitches(idEventLine2, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchDraw))
                return idEventLine3;
            else if (this.isSelfSwitches(idEventLine2, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchCross) && this.isSelfSwitches(idEventLine1, selfSwitchDraw))
                return idEventLine1;
            else if (this.isSelfSwitches(idEventLine1, selfSwitchCross) && this.isSelfSwitches(idEventLine3, selfSwitchCross) && this.isSelfSwitches(idEventLine2, selfSwitchDraw))
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
            else return this.getCellMoveTicTacToe_Easy(idEventStart, selfSwitchDraw);
        }
    }

    static getCellMoveTicTacToe(idEventStart, selfSwitchCross = "B", selfSwitchToe = "C", selfSwitchDraw = "A") {
        switch ($gameVariables.value(SPProject.varTypeLevel)) {
            case 0:
                return this.getCellMoveTicTacToe_Easy(idEventStart, selfSwitchDraw);
                break;
            default:
                return this.getCellMoveTicTacToe_Hard(idEventStart, selfSwitchCross, selfSwitchToe, selfSwitchDraw);
                break;
        }
    }

    //#endregion

    //#region Для ожидания кадров анимации

    //Функция ожидания кадров анимации
    static waitAnimationFrame(_frame = $gameVariables.value(SPProject.varFrameAnimation)) {
        $gameMap._interpreter.wait((_frame / $gameVariables.value(SPProject.varFrameAnimation)) * $gameVariables.value(SPProject.varFrameGame));
    }

    //#endregion

    static runCommonEvent(_id) {
        if ($gameTemp.isCommonEventReserved(_id)) $gameTemp.clearCommonEvent(id);
        $gameTemp.reserveCommonEvent(_id);
    }

    //#region Мозайка

    static isPuzzleDone(idCountElementPuzzle = 9, idEventStart = 1) {
        var idcnt = 0;
        for (var i = idEventStart; i < idEventStart + idCountElementPuzzle; i++) {
            if ($gameMap.regionId($gameMap.event(i).x, $gameMap.event(i).y) === i) idcnt++;
        }
        if (idcnt === idCountElementPuzzle) {
            return true;
        } else {
            return false;
        }
    }

    static setPuzzles(idCountElementPuzzle = 9, idEventStart = 1) {
        $gameVariables.setValue(
            SPProject.mgPuzzle.varRndPuzzles,
            this.getRandomInRange(SPProject.mgPuzzle.rndPuzzles.minNumberRndPuzzles, SPProject.mgPuzzle.rndPuzzles.maxNumberRndPuzzles)
        );
        var arrCoordPuzzles = [];
        var width = $gameMap.width();
        var height = $gameMap.height();
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                if ($gameMap.regionId(x, y) === SPProject.mgPuzzle.idRegionRndPuzzles) {
                    var coordpuzzles = {
                        x: 0,
                        y: 0
                    };
                    coordpuzzles.x = x;
                    coordpuzzles.y = y;
                    arrCoordPuzzles.push(coordpuzzles);
                }
            }
        }

        if (arrCoordPuzzles.length > 0) {
            arrCoordPuzzles = arrCoordPuzzles.sort(function() {
                return Math.random() - 0.5;
            });
            for (var i = idEventStart; i < idEventStart + idCountElementPuzzle; i++) {
                $gameMap.event(i).setPosition(arrCoordPuzzles[i].x, arrCoordPuzzles[i].y);
            }
        }
    }

    //#endregion

    //#region Нажатие клавишь за время

    //#endregion
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
