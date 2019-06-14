/**
 * Created by 111 on 2019/6/13.
 */
// import moment from 'moment'
import format from 'date-fns/format'
import Vue from 'vue'
Vue.filter('date-format', function (value, formatStr) {
  // return moment(value).format(formatStr || 'YYYY-MM-DD HH:mm:ss')
  return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
})
