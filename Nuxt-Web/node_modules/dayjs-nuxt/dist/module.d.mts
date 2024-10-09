import * as _nuxt_schema from '@nuxt/schema';

type BuiltInLocale = 'af' | 'af' | 'am' | 'am' | 'ar-dz' | 'ar-dz' | 'ar-iq' | 'ar-iq' | 'ar-kw' | 'ar-kw' | 'ar-ly' | 'ar-ly' | 'ar-ma' | 'ar-ma' | 'ar-sa' | 'ar-sa' | 'ar-tn' | 'ar-tn' | 'ar' | 'ar' | 'az' | 'az' | 'be' | 'be' | 'bg' | 'bg' | 'bi' | 'bi' | 'bm' | 'bm' | 'bn-bd' | 'bn-bd' | 'bn' | 'bn' | 'bo' | 'bo' | 'br' | 'br' | 'bs' | 'bs' | 'ca' | 'ca' | 'cs' | 'cs' | 'cv' | 'cv' | 'cy' | 'cy' | 'da' | 'da' | 'de-at' | 'de-at' | 'de-ch' | 'de-ch' | 'de' | 'de' | 'dv' | 'dv' | 'el' | 'el' | 'en-au' | 'en-au' | 'en-ca' | 'en-ca' | 'en-gb' | 'en-gb' | 'en-ie' | 'en-ie' | 'en-il' | 'en-il' | 'en-in' | 'en-in' | 'en-nz' | 'en-nz' | 'en-sg' | 'en-sg' | 'en-tt' | 'en-tt' | 'en' | 'en' | 'eo' | 'eo' | 'es-do' | 'es-do' | 'es-mx' | 'es-mx' | 'es-pr' | 'es-pr' | 'es-us' | 'es-us' | 'es' | 'es' | 'et' | 'et' | 'eu' | 'eu' | 'fa' | 'fa' | 'fi' | 'fi' | 'fo' | 'fo' | 'fr-ca' | 'fr-ca' | 'fr-ch' | 'fr-ch' | 'fr' | 'fr' | 'fy' | 'fy' | 'ga' | 'ga' | 'gd' | 'gd' | 'gl' | 'gl' | 'gom-latn' | 'gom-latn' | 'gu' | 'gu' | 'he' | 'he' | 'hi' | 'hi' | 'hr' | 'hr' | 'ht' | 'ht' | 'hu' | 'hu' | 'hy-am' | 'hy-am' | 'id' | 'id' | 'is' | 'is' | 'it-ch' | 'it-ch' | 'it' | 'it' | 'ja' | 'ja' | 'jv' | 'jv' | 'ka' | 'ka' | 'kk' | 'kk' | 'km' | 'km' | 'kn' | 'kn' | 'ko' | 'ko' | 'ku' | 'ku' | 'ky' | 'ky' | 'lb' | 'lb' | 'lo' | 'lo' | 'lt' | 'lt' | 'lv' | 'lv' | 'me' | 'me' | 'mi' | 'mi' | 'mk' | 'mk' | 'ml' | 'ml' | 'mn' | 'mn' | 'mr' | 'mr' | 'ms-my' | 'ms-my' | 'ms' | 'ms' | 'mt' | 'mt' | 'my' | 'my' | 'nb' | 'nb' | 'ne' | 'ne' | 'nl-be' | 'nl-be' | 'nl' | 'nl' | 'nn' | 'nn' | 'oc-lnc' | 'oc-lnc' | 'pa-in' | 'pa-in' | 'pl' | 'pl' | 'pt-br' | 'pt-br' | 'pt' | 'pt' | 'rn' | 'rn' | 'ro' | 'ro' | 'ru' | 'ru' | 'rw' | 'rw' | 'sd' | 'sd' | 'se' | 'se' | 'si' | 'si' | 'sk' | 'sk' | 'sl' | 'sl' | 'sq' | 'sq' | 'sr-cyrl' | 'sr-cyrl' | 'sr' | 'sr' | 'ss' | 'ss' | 'sv-fi' | 'sv-fi' | 'sv' | 'sv' | 'sw' | 'sw' | 'ta' | 'ta' | 'te' | 'te' | 'tet' | 'tet' | 'tg' | 'tg' | 'th' | 'th' | 'tk' | 'tk' | 'tl-ph' | 'tl-ph' | 'tlh' | 'tlh' | 'tr' | 'tr' | 'tzl' | 'tzl' | 'tzm-latn' | 'tzm-latn' | 'tzm' | 'tzm' | 'ug-cn' | 'ug-cn' | 'uk' | 'uk' | 'ur' | 'ur' | 'uz-latn' | 'uz-latn' | 'uz' | 'uz' | 'vi' | 'vi' | 'x-pseudo' | 'x-pseudo' | 'yo' | 'yo' | 'zh-cn' | 'zh-cn' | 'zh-hk' | 'zh-hk' | 'zh-tw' | 'zh-tw' | 'zh' | 'zh';
type BuiltInPluginName = 'advancedFormat' | 'arraySupport' | 'badMutable' | 'bigIntSupport' | 'buddhistEra' | 'calendar' | 'customParseFormat' | 'dayOfYear' | 'devHelper' | 'duration' | 'isBetween' | 'isLeapYear' | 'isMoment' | 'isSameOrAfter' | 'isSameOrBefore' | 'isToday' | 'isTomorrow' | 'isYesterday' | 'isoWeek' | 'isoWeeksInYear' | 'localeData' | 'localizedFormat' | 'minMax' | 'objectSupport' | 'pluralGetSet' | 'preParsePostFormat' | 'quarterOfYear' | 'relativeTime' | 'timezone' | 'toArray' | 'toObject' | 'updateLocale' | 'utc' | 'weekOfYear' | 'weekYear' | 'weekday';

interface RelativeTimeOptions {
    future: string;
    past: string;
    s: string;
    m: string;
    mm: string;
    h: string;
    hh: string;
    d: string;
    dd: string;
    M: string;
    MM: string;
    y: string;
    yy: string;
}
interface FormatOptions {
    LT: string;
    LTS: string;
    L: string;
    LL: string;
    LLL: string;
    LLLL: string;
}
interface DefaultLocaleOptions {
    name?: string;
    weekdays?: string[];
    months?: string[];
    /**
     * The starting day of a week, 1 for Monday / 7 for Sunday
     */
    weekStart?: number;
    /**
     * Ability to configure relatvieTime with updateLocale
     * https://day.js.org/docs/en/customization/relative-time
     */
    weekdaysShort?: string[];
    monthsShort?: string[];
    weekdaysMin?: string[];
    ordinal?: (n: number) => number | string;
    formats?: FormatOptions;
    relativeTime?: RelativeTimeOptions;
}
interface ModuleOptions {
    /**
     * An array of optional locales to load
     * @example ['en', 'fr']
     */
    locales?: BuiltInLocale[];
    /**
     * The default locale to use
     */
    defaultLocale?: BuiltInLocale | [BuiltInLocale, DefaultLocaleOptions];
    /**
     * The default timezone to use
     */
    defaultTimezone?: string;
    /**
     * An array of built-in optional plugins to load
     * @example ['timezone', 'utc']
     */
    plugins?: BuiltInPluginName[];
    /**
     * An array of external optional plugins to load
     * @example ['timezone', 'utc']
     */
    externalPlugins?: {
        name: string;
        package: string;
        option?: unknown;
    }[];
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { type ModuleOptions, type RelativeTimeOptions, _default as default };
