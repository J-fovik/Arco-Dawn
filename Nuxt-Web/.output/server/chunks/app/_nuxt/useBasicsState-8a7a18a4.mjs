import { ref } from 'vue';

const useBasicsState = (value, callback) => {
  const basicsState = ref(value);
  const setBasicsState = (newValue) => {
    if (basicsState.value !== newValue) {
      basicsState.value = newValue;
      if (callback)
        callback(newValue);
    }
  };
  return [basicsState, setBasicsState];
};

export { useBasicsState as u };
//# sourceMappingURL=useBasicsState-8a7a18a4.mjs.map
