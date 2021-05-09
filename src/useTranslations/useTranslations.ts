import { useRouter } from "next/router";
import { useState } from "react";

type TranslationType = Array<{ key: string; value: string; locale: string }>;

const TranslationObject = {};

export const useTranslations = (initialTranslations?: TranslationType) => {
  const context = useRouter();
  useState(() => {
    initialTranslations?.forEach((item) => {
      if (item?.key && item.value) {
        if (!TranslationObject[item.locale]) {
          TranslationObject[item.locale] = {};
        }
        TranslationObject[item.locale][item.key] = item.value;
      }
    });

    return TranslationObject;
  });

  return (key: string, params?: any) => {
    const translatedRawString = TranslationObject[context.locale][key];

    if (params && translatedRawString) {
      return translatedRawString.replace(
        /\[\s*(\w+)\s*\]/g,
        ($0, $1) => params[$1]?.toString() ?? ""
      );
    }
    if (!translatedRawString) {
      console.warn(`Missing translation ${key}`);
      return key;
    }
    return translatedRawString;
  };
};
