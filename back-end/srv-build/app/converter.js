// Generated by CoffeeScript 1.10.0
var convertData, itemsConvert, tools,
  hasProp = {}.hasOwnProperty;

tools = require('../tools');

convertData = require('./convert.json');

exports.convert = {
  linode: {}
};

itemsConvert = function(data, convData) {
  var i, len, name, newProp, prop, propIterator, result, value;
  propIterator = function(name, value, newProp) {
    var item;
    item = convData[name];
    if (item === undefined) {
      newProp[name] = {
        value: value
      };
      if (tools.isNumber(value)) {
        newProp[name].type = 'number';
      } else if (tools.isBoolean(value)) {
        newProp[name].type = 'bool';
      } else {
        newProp[name].type = 'string';
      }
    } else {
      name = item.name;
      newProp[name] = {
        type: item.type
      };
      if (item.editable !== undefined) {
        newProp[name].editable = item.editable;
      }
      if (item.hint !== undefined) {
        newProp[name].hint = item.hint;
      }
      if (item.type === 'bool') {
        newProp[name].value = tools.toBoolean(value);
      } else {
        newProp[name].value = value;
      }
    }
  };
  if (tools.isArray(data)) {
    result = [];
    for (i = 0, len = data.length; i < len; i++) {
      prop = data[i];
      newProp = {};
      for (name in prop) {
        if (!hasProp.call(prop, name)) continue;
        value = prop[name];
        propIterator(name, value, newProp);
      }
      result.push(newProp);
    }
  } else {
    result = {};
    for (name in data) {
      if (!hasProp.call(data, name)) continue;
      value = data[name];
      propIterator(name, value, result);
    }
  }
  return result;
};

exports.convert.linode.state = function(data) {
  data = tools.deepSort(data);
  return itemsConvert(data, convertData.linode.state);
};

exports.convert.linode.config = function(data) {
  data = tools.deepSort(data);
  return itemsConvert(data, convertData.linode.config);
};

exports.convert.linode.disk = function(data) {
  data = tools.deepSort(data);
  return itemsConvert(data, convertData.linode.disk);
};

exports.convert.linode.job = function(data) {
  return itemsConvert(data, convertData.linode.job);
};

exports.convert.linode.ip = function(data) {
  var result;
  data = tools.deepSort(data);
  result = itemsConvert(data, convertData.linode.ip);
  result.forEach(function(prop) {
    return prop['label'] = prop['ip_address'];
  });
  return result;
};

exports.spec = function(spec) {};

//# sourceMappingURL=converter.js.map
