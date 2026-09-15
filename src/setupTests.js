// Testing setup: extend jest matchers and polyfills for testing environment
import '@testing-library/jest-dom'
class IntersectionObserverMock {
  observe() { }
  unobserve() { }
  disconnect() { }
}

global.IntersectionObserver = global.IntersectionObserver || IntersectionObserverMock
