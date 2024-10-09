import dayjs from '#build/dayjs.imports.mjs';
declare module '#app' {
    interface NuxtApp {
        $dayjs: typeof dayjs;
    }
}
declare module 'vue' {
    interface ComponentCustomProperties {
        $dayjs: typeof dayjs;
    }
}
declare module 'vue' {
    interface ComponentCustomProperties {
        $dayjs: typeof dayjs;
    }
}
declare const _default: import("#app").Plugin<Record<string, unknown>> & import("#app").ObjectPlugin<Record<string, unknown>>;
export default _default;
