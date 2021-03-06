"use strict";

exports.__esModule = true;
exports.isFiltered = isFiltered;
function isFiltered(action, filter) {
  if (!filter) return false;

  var whitelist = filter.whitelist,
      blacklist = filter.blacklist;

  return whitelist && !action.type.match(whitelist) || blacklist && action.type.match(blacklist);
}