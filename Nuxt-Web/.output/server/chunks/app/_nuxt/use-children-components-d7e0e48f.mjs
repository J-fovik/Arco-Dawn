import { ref, onUpdated } from 'vue';
import { z as getComponentsFromChildren } from './use-teleport-container-1599a5a4.mjs';

const useChildrenComponents = (name) => {
  const children = {};
  const components = ref([]);
  const getComponents = () => {
    if (children.value) {
      const _components = getComponentsFromChildren(children.value, name);
      if (_components.length !== components.value.length || _components.toString() !== components.value.toString()) {
        components.value = _components;
      }
    }
  };
  onUpdated(() => getComponents());
  return {
    children,
    components
  };
};

export { useChildrenComponents as u };
//# sourceMappingURL=use-children-components-d7e0e48f.mjs.map
