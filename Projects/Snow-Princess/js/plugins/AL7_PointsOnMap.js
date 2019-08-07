//=============================================================================
// AL7_PointsOnMap.js
//=============================================================================

/*:ru
 * @plugindesc AL7_PointsOnMap v1.4 Отображает на экране 2 переменных
 * @author Alexandr_7
 * @help
 
 ### Информация о плагине ###
 Название: PointsOnMap
 Автор: Alexandr_7
 Сайт: https://vk.com/borisov_alexandr_5
 Версия: 1.4
 Релиз: 08.03.2019
 Первый релиз: 12.09.2017
 Поддерживаемые языки: Русский
 
 ### Лицензия и правила использования плагина ###
 
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить на другие языки или полностью поменять текст плагина (сообщите мне, если Вы это сделали)
 -Изменять код плагина, но Вы обязаны указать ссылку на оригинальный плагин
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 
 PS: Выпущу еще 1 плагин, (Плагин для битвы с босом по стрельбе на ивентах) но не знаю когда именно!
 
 * @param ---Переключатели---
 * @default
 *
 * @param Enable_Switch_Id
 * @parent ---Переключатели---
 * @type switch
 * @desc Показать/Скрыть (номер переключателя)
 * @default 1
 *
 * @param ---Переменные---
 * @default
 *
 * @param Item_Var_Id
 * @parent ---Переменные---
 * @type variable
 * @desc Иконка предмета (номер переменной)
 * @default 1
 *
 * @param Count_Var_Id
 * @parent ---Переменные---
 * @type variable
 * @desc Количество очков (номер переменной)
 * @default 2
 *
 * @param Count_Max_Var_Id
 * @parent ---Переменные---
 * @type variable
 * @desc Максимальное количество очков (номер переменной)
 * @default 3
 *
 * @param ---Текст---
 * @default
 *
 * @param Text_Symbol
 * @parent ---Текст---
 * @desc Символ или фраза между значениями переменных
 * @default /
 *
 * @param ---Цвет---
 * @default
 *
 * @param Color_Text_Symbol
 * @parent ---Цвет---
 * @type number
 * @min 0
 * @max 31
 * @desc Цвет Символа или фразы между значениями переменных
 * @default 17
 *
 * @param Color_Сount
 * @parent ---Цвет---
 * @type number
 * @min 0
 * @max 31
 * @desc Цвет 1 переменной
 * @default 0
 *
 * @param Color_Max_Сount
 * @parent ---Цвет---
 * @type number
 * @min 0
 * @max 31
 * @desc Цвет 2 переменной
 * @default 0
 *
 * @param ---Число---
 * @default
 *
 * @param Count_Icon_Progress
 * @parent ---Число---
 * @type number
 * @desc Количество иконок прогресса сбора если меньше 5 то не действительно.
 * @default 0
 *
 * @param Start_ID_Icon_Progress
 * @parent ---Число---
 * @type number
 * @desc C какого ИД наченается (Иконки прогресса должно идти по порядку)
 * @default 0
 *
 * @param ---Размеры---
 * @default
 *
 * @param Window_Points_Width
 * @parent ---Размеры---
 * @type number
 * @desc Ширина окна
 * @default 288
 *
 * @param Window_Points_Height
 * @parent ---Размеры---
 * @type number
 * @desc Высота окна
 * @default 60
 *
 * @param Width_Height_Icon
 * @parent ---Размеры---
 * @type number
 * @desc Размер иконки
 * @default 32
 *
 * @param Window_Align_Position
 * @parent ---Размеры---
 * @type select
 * @default 9
 * @option В верху слева
 * @value 0
 * @option В верху по центру
 * @value 1
 * @option В верху справа
 * @value 2
 * @option По центру слева
 * @value 3
 * @option По центру
 * @value 4
 * @option По центру справа
 * @value 5
 * @option Внизу слева
 * @value 6
 * @option Внизу по центру
 * @value 7
 * @option Внизу справа
 * @value 8
 * @option По своим координатам
 * @value 9
 * @desc Положения окна
 *
 * @param Position_X
 * @parent ---Размеры---
 * @type number
 * @desc Позиция или смещение по X
 * @default 32
 *
 * @param Position_Y
 * @parent ---Размеры---
 * @type number
 * @desc Позиция или смещение по Y
 * @default 32
 *
 * @param Offset_X_Icon
 * @parent ---Размеры---
 * @type number
 * @desc Смещения иконки предмета по X
 * @default 16
 *
 *
 */

(function() {
	
	var parameters = PluginManager.parameters('AL7_PointsOnMap');
	
	var enableSwitchId = Number(parameters['Enable_Switch_Id']);
	var itemVarId = Number(parameters['Item_Var_Id']);
	//var IconNotCompletedId = Number(parameters['IconNotCompletedId']);
	//var IconCompletedId = Number(parameters['IconCompletedId']);
	var countVarId = Number(parameters['Count_Var_Id']);
	var countMaxVarId = Number(parameters['Count_Max_Var_Id']);
	var TextSymbol = String(parameters['Text_Symbol']);
	var ColorTextSymbol = Number(parameters['Color_Text_Symbol']);
	var ColorСount = Number(parameters['Color_Сount']);
	var ColorСountMax = Number(parameters['Color_Max_Сount']);
	var CountIconProgress = Number(parameters['Count_Icon_Progress']);
	var StartIDIconProgress = Number(parameters['Start_ID_Icon_Progress']);
	
	var WindowWidth = Number(parameters['Window_Points_Width']);
	var WindowHeight = Number(parameters['Window_Points_Height']);
	
	var WidthHeightIcon = Number(parameters['Width_Height_Icon']);
	
	var WindowAlignPosition = Number(parameters['Window_Align_Position']);
	
	var PositionX = Number(parameters['Position_X']);
	var PositionY = Number(parameters['Position_Y']);
	
	var OffsetXIcon = Number(parameters['Offset_X_Icon']);
	

	var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
	Scene_Map.prototype.createAllWindows = function() {
		_Scene_Map_createAllWindows.call(this);
		var SetX = 0;
		var SetY = 0;
		switch(WindowAlignPosition) {
			case 0: SetX = PositionX; SetY = PositionY; break; //В верху слева
			case 1: SetX = (Graphics.boxWidth / 2) - (WindowWidth / 2); SetY = PositionY; break; //В верху по центру
			case 2: SetX = (Graphics.boxWidth - WindowWidth) - PositionX; SetY = PositionY;  break; //В верху справа
			case 3: SetX = PositionX; SetY = (Graphics.boxHeight / 2) - (WindowHeight / 2); break; //По центру слева
			case 4: SetX = (Graphics.boxWidth / 2) - (WindowWidth / 2); SetY = (Graphics.boxHeight / 2) - (WindowHeight / 2); break; //По центру
			case 5: SetX = (Graphics.boxWidth - WindowWidth) - PositionX; SetY = (Graphics.boxHeight / 2) - (WindowHeight / 2); break; //По центру справа
			case 6: SetX = PositionX; SetY = (Graphics.boxHeight - WindowHeight) - PositionY; break; // Внизу слева
			case 7: SetX = (Graphics.boxWidth / 2) - (WindowWidth / 2); SetY = (Graphics.boxHeight - WindowHeight) - PositionY; break; // Внизу по центру
			case 8: SetX = (Graphics.boxWidth - WindowWidth) - PositionX; SetY = (Graphics.boxHeight - WindowHeight) - PositionY; break; // Внизу справа
			case 9: SetX = PositionX; SetY = PositionY; break; // Свои
		}
		this._pointsOnMap = new PointsOnMap(SetX, SetY, WindowWidth, WindowHeight);
		this.addWindow(this._pointsOnMap);
	};
	
	/********************
	Окно и текст
	********************/
		
	function PointsOnMap() {
		this.initialize.apply(this, arguments);
	};
		
	PointsOnMap.prototype = Object.create(Window_Base.prototype);
	PointsOnMap.prototype.constructor = PointsOnMap;
		
	PointsOnMap.prototype.standardPadding = function() {
		return 0;
	};
		
	PointsOnMap.prototype.initialize = function(x, y, width, height) {
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this.update();
	};
		
	PointsOnMap.prototype.update = function() {
		this.contents.clear();
		if ($gameSwitches.value(enableSwitchId)) {
			this.show();
			this.resetTextColor();
			DrawValueFromVariable(this, $gameVariables.value(countVarId), $gameVariables.value(countMaxVarId), this.textColor(ColorTextSymbol), this.textColor(ColorСount), this.textColor(ColorСountMax));
		} else this.hide();
	};
	
	function DrawValueFromVariable (aWindow_Base, aCount1, aCount2, aTextColor, aColorCount1, aColorCount2) {
		var itemId = $gameVariables.value(itemVarId);
		if (itemId > 0)
		{
			var YoutIcon1 = (WindowHeight / 2) - (WidthHeightIcon / 2);
			aWindow_Base.drawIcon(itemId, OffsetXIcon, YoutIcon1);
		}
		if ( CountIconProgress >= 5 ) {
			var aProcProgress = ((aCount1 * 100) / aCount2);
			if (aProcProgress > 100)
				aProcProgress = 100;
			var aID_Icon = Math.floor(aProcProgress / (Math.floor(100 / CountIconProgress)));
			var YoutIcon2 = (WindowHeight / 2) - (WidthHeightIcon / 2);
			aWindow_Base.drawIcon((StartIDIconProgress + aID_Icon), WindowWidth - WidthHeightIcon - OffsetXIcon, YoutIcon2);
		}
		var XoutText1 = (WindowWidth / 2) - (aWindow_Base.textWidth(aCount1 + " " + TextSymbol + " " + aCount2) / 2);
		var XoutText2 = (WindowWidth / 2) - (aWindow_Base.textWidth(aCount1 + " " + TextSymbol + " " + aCount2) / 2) + aWindow_Base.textWidth(aCount1);
		var XoutText3 = (WindowWidth / 2) - (aWindow_Base.textWidth(aCount1 + " " + TextSymbol + " " + aCount2) / 2) + aWindow_Base.textWidth(aCount1 + " " + TextSymbol + " ");
		
		var YoutText  = (WindowHeight / 2) - (WidthHeightIcon / 2);
		
		aWindow_Base.changeTextColor(aColorCount1);
		aWindow_Base.drawText(aCount1, XoutText1, YoutText, aWindow_Base.textWidth(aCount1));
		aWindow_Base.changeTextColor(aTextColor);
		aWindow_Base.drawText(" " + TextSymbol + " ", XoutText2, YoutText, aWindow_Base.textWidth(" " + TextSymbol + " "));
		aWindow_Base.changeTextColor(aColorCount2);
		aWindow_Base.drawText(aCount2, XoutText3, YoutText, aWindow_Base.textWidth(aCount2));
	}
})();