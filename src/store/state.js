let defaultCity = ''
try {
  defaultCity = localStorage.city || '杭州'
} catch (error) {}

export default {
  city: defaultCity
}
