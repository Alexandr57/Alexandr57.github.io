//=============================================================================
// TitleCommandPosition.js
//=============================================================================

/*:
 * @plugindesc Changes the position of the title command window. v1.0 (Fix from Alexandr_7 v1.1)
 * @author Yoji Ojima (Fix from Alexandr_7)
 *
 * @param Enable Offset
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If "true" then the offset will be set, otherwise the real position will be set.
 * NO - false     YES - true
 * @default false
 *
 * @param Offset X
 * @type number
 * @desc The offset value for the x coordinate.
 * @default 0
 *
 * @param Offset Y
 * @type number
 * @desc The offset value for the y coordinate.
 * @default 0
 *
 * @param Pos X
 * @type number
 * @desc Real position for x coordinate
 * @default 0
 *
 * @param Pos Y
 * @type number
 * @desc Real position for y coordinate
 * @default 0
 *
 * @param Width
 * @type number
 * @desc The width of the command window.
 * @default 240
 *
 * @param Background
 * @type select
 * @default 0
 * @option Normal
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc The background type. 0: Normal, 1: Dim, 2: Transparent
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc タイトルコマンドウィンドウの位置を変更します。
 * @author Yoji Ojima
 *
 * @param EnableOffset
 * @type boolean
 * @on Enable
 * @off Disable
 * NO - false     YES - true
 * @desc "true"の場合はオフセットが設定され、それ以外の場合は実際の位置が設定されます。
 * @default false
 *
 * @param Offset X
 * @type number
 * @desc X座標のオフセット値です。
 * @default 0
 *
 * @param Offset Y
 * @type number
 * @desc Y座標のオフセット値です。
 * @default 0
 *
 * @param Pos X
 * @type number
 * @desc x座標の実位置
 * @default 0
 *
 * @param Pos Y
 * @type number
 * @desc Y座標の実位置
 * @default 0
 *
 * @param Width
 * @type number
 * @desc コマンドウィンドウの幅です。
 * @default 240
 *
 * @param Background
 * @type select
 * @default 0
 * @option 通常、
 * @value 0
 * @option 暗くする、
 * @value 1
 * @option 透明
 * @value 2
 * @desc 背景タイプです。0: 通常、1: 暗くする、2: 透明
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */
 
/*:ru
 * @plugindesc Изменяет положение окна командной строки заголовка. v1.0 (Исправлено от Alexandr_7 v1.1)
 * @author Yoji Ojima (Fix from Alexandr_7)
 *
 * @param EnableOffset
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Если "true" то будет задано смещение иначе будет задана реальная позиция.
 * NO - false     YES - true
 * @default false
 *
 * @param Offset X
 * @type number
 * @desc Смещение по координате X
 * @default 0
 *
 * @param Offset Y
 * @type number
 * @desc Смещение по координате Y
 * @default 0
 *
 * @param Pos X
 * @type number
 * @desc Позиция по координате X
 * @default 0
 *
 * @param Pos Y
 * @type number
 * @desc Позиция по координате Y
 * @default 0
 *
 * @param Width
 * @type number
 * @desc Ширина
 * @default 240
 *
 * @param Background
 * @type select
 * @default 0
 * @option Окно
 * @value 0
 * @option Уменьшенная освещенность
 * @value 1
 * @option Прозрачный
 * @value 2
 * @desc Стиль окна. 0: Окно, 1: Уменьшенная освещенность, 2: Прозрачный
 *
 * @help Этот плагин не предоставляет команды плагина.
 */




(function() {

    var parameters = PluginManager.parameters('TitleCommandPosition');
	var EnableOffset = eval(String(parameters['Enable Offset']));
    var offsetX = Number(parameters['Offset X'] || 0);
    var offsetY = Number(parameters['Offset Y'] || 0);
	var posX = Number(parameters['Pos X'] || 0);
	var posX = Number(parameters['Pos Y'] || 0);
    var width = Number(parameters['Width'] || 240);
    var background = Number(parameters['Background'] || 0);

    var _Window_TitleCommand_updatePlacement =
            Window_TitleCommand.prototype.updatePlacement;
    Window_TitleCommand.prototype.updatePlacement = function() {
        _Window_TitleCommand_updatePlacement.call(this);
        if (EnableOffset == true) {
			this.x += offsetX;
			this.y += offsetY;
		} else {
			this.x = posX;
			this.y = posY;
		}
			
        this.setBackgroundType(background);
    };

    Window_TitleCommand.prototype.windowWidth = function() {
        return width;
    };

})();
