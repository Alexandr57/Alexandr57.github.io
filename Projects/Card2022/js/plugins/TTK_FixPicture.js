//=============================================================================
// TTK - Fix Picture (v1.0.1)
// by Fogomax
//=============================================================================
  
 
/*:
  * @author Fogomax
  * @target MV MZ
  * @plugindesc This plugin fixes the images in the map
  * <TTK FixPicture>
  * 
  * @param Size Tile
  * @desc The size of the tile used in the game
  * @type number
  * @min 0
  * @default 48
  * 
  * @param Fix Prefix
  * @desc The prefix the image needs have to be fixed
  * @default [FIX]
  * 
  * @help
    ===========================================================================
    ● Explanation
    ===========================================================================
    This plugins fixes the image in the map and in the coordenates specifieds
    in the event command, its not necessary the position be 0, 0. Because of
    this feature, you still can use the Move Picture command with fixed
    pictures.

    ===========================================================================
    ● Use
    ===========================================================================
    Just include the prefix in the image file name. Using the default Fix
    Prefix, the image name would be "[FIX]Image.png".
 */

 /*:ru
  * @author Fogomax
  * @target MV MZ
  * @plugindesc Этот плагин фиксирует позицию картинки на карте
  * <TTK FixPicture>
  * 
  * @param Size Tile
  * @text Размер тайла
  * @desc Размер тайла используемый в игре 
  * @type number
  * @min 0
  * @default 48
  * 
  * @param Fix Prefix
  * @text Префикс Фиксации
  * @desc Префикс необходимый для фиксации изображения
  * @default [FIX]
  * 
  * @help
    ===========================================================================
    ● Описание
    ===========================================================================
    Этот плагин фиксирует изображение на карте и в координатах, указанных в 
    команде event, его позиция не обязательно должна быть 0, 0. из-за этой 
    функции вы все еще можете использовать команду Переместить Изображение с 
    фиксированными изображениями.

    ===========================================================================
    ● Использование
    ===========================================================================
    Просто включите префикс в имя файла изображения. Используя Префикс Фиксации 
    по умолчанию, имя изображения будет "[FIX]Image. png".

 */

var Imported = Imported || {};
Imported["TTK_FixPicture"] = "1.0.1";

var TTK = TTK || {};
TTK.FixPicture = {};

"use strict";

(function($) {
  $.Params = $plugins.filter(function(p) { return p.description.contains('<TTK FixPicture>'); })[0].parameters;

	//-----------------------------------------------------------------------------
	// Plugin global variables
	//

  $.sizeTile = parseInt($.Params["Size Tile"]);
	$.fixPrefix = $.Params["Fix Prefix"];

	//-----------------------------------------------------------------------------
	// Sprite_Picture
	//

	var _Sprite_Picture_updatePosition = Sprite_Picture.prototype.updatePosition;

	Sprite_Picture.prototype.updatePosition = function() {
		if (~this.picture().name().indexOf($.fixPrefix)) {
		    var picture = this.picture();
		    this.x = (-$gameMap.displayX() * $.sizeTile) + picture.x();
		    this.y = (-$gameMap.displayY() * $.sizeTile) + picture.y();
		} else {
			_Sprite_Picture_updatePosition.call(this);
		}
	};
})(TTK.FixPicture);
