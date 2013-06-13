// LICENSE@@@
//
//      Copyright (c) 2009-2013 LG Electronics, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// @@@LICENSE

/*jslint white: true, onevar: true, undef: true, eqeqeq: true, plusplus: true, bitwise: true,
regexp: true, newcap: true, immed: true, nomen: false, maxerr: 500 */
/*global PropertyBase*/

/**
 * @class
 * @augments PropertyBase
 * @param {boolean} obj the raw database object
 * @example
 * var readOnly = new ReadOnly(true);
 *
 * var isReadOnly = readOnly.getValue();
 * var isReadOnlyAgain = readOnly.x_value; // This is for use in widgets. Code should always call the getter rather than accessing the property.
 */
var ReadOnly = PropertyBase.create({
	/**
	* @lends ReadOnly#
	* @property {boolean} x_value
	*/
	data: [
		{
			dbFieldName: "",
			defaultValue: false,
			/**
			* @name ReadOnly#setValue
			* @function
			* @param {boolean} value
			*/
			setterName: "setValue",
			/**
			* @name ReadOnly#getValue
			* @function
			* @returns {boolean}
			*/
			getterName: "getValue"
		}
	]
});
