function getUrlArgs() {
  var obj = {}, word, key, value;
  var search = window.location.search;
  var r =/([?&]([^?&=]+)=([^?&]+))/g;
  var map = {'true': true, 'false': false, 'null': null};
  while ( (word = r.exec(search)) ) {
    key = decodeURIComponent( clean(word[2]) ) ;
    value = decodeURIComponent( clean(word[3]) );
    // 这里使用 (+value) 转换 number 时因为 (+'123abc') === 'NaN'，
    // 而 parseInt('123abc') === 123 。
    // 注意(+'') === 0, 但是 (value === '') 这个情况这里不会出现。
    if ( (+value).toString() === 'NaN' ) {
      // 'true', 'false', 'null' -> true, false, null
      value = value in map ? map[value] : value;
    } else {
      value = (+value);
    }
    obj[key] = value;
  }
  function clean(value) {
    // ' abc d ' -> 'abcd'
    return (value || '').trim().replace(' ', '');
  }
  return obj;
}
