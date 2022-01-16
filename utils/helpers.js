import _ from 'lodash'

/**
 * Helper for filtering array with dynamic criteria.
 * @param array array to filter.
 * @param conditions array of conditions.
 * @param prop property of the array filter.
 */

export const filterArray = (array, conditions, prop) => {
  const result = _.filter(
    array,
    (arr) => _.indexOf(conditions, arr[prop]) !== -1
  )
  return result
}

/**
 * Helper for filtering array with dynamic criteria.
 * @param array array to filter.
 * @param conditions object of conditions.
 * @returns Filtered array
 */

export const filterArrayByObjectCondition = (array, conditions) => {
  return array.filter((obj) => {
    return Object.entries(conditions).every(([prop, find]) => {
      return find.includes(obj[prop])
    })
  })
}

/**
 * Helper for filtering array with dynamic criteria.
 * @param array array to filter.
 * @param conditions object of conditions.
 * @returns Filtered array
 */

export const filterArrayByNestedObjectCondition = (
  array,
  conditions,
  field
) => {
  return array.filter((obj) => {
    return Object.entries(conditions).every(([prop, find]) => {
      return find.includes(obj[prop][field])
    })
  })
}

/**
 * Helper for filtering array by date range.
 * @param array array to filter.
 * @param startDate Start date.
 * @param endDate End date.
 * @param prop Property of iteration as date.
 * @returns Filtered array.
 */

export const filterArrayByDateRange = (array, startDate, endDate, prop) => {
  return array.filter((obj) => {
    let date = new Date(obj[prop])

    return date >= startDate && date <= endDate
  })
}

/**
 * Helper for number only input.
 * @param e event.
 */

export const numberOnly = (e) => {
  let charCode = e.which ? e.which : e.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
   
    e.preventDefault()
  } else {
    return true
  }
}
export const IntegerOnly = (e) => {
  let charCode = e.which ? e.which : e.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46 || e.key=='.') {
   
    e.preventDefault()
  } else {
    return true
  }
}

/**
 * Helper for cloning an object.
 * @param object object to clone.
 */

export const cloneObject = (object) => {
  const copiedObject = Object.assign({}, object)
  return copiedObject
}

/**
 * Helper for ID generator.
 * @param length length of generated string .
 */

export const make_id = (length = 5) => {
  let result = 'NIL-'
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result.toLocaleUpperCase()
}

/**
 * Helper for formatting currency.
 *
 * @example
 *  Example 1000 -> Php 1,000.00
 * @param {string} value value to convert.
 * @return { string } Result string
 */

export const formatCurrency = (value) => {
  const result =
    'Php ' +
    parseFloat(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')

  return result
}
