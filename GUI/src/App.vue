<template>
  <div class="flex flex-wrap">
    <div class="head w-full text-left p-5">
      <h1 class="text-5xl ml-3">
        {{ title }}
      </h1>
      <h2 class="text-2xl ml-3 mt-4">
        {{ subtitle }}
      </h2>
    </div>
    <div class="nav w-full pl-3">
      <div class="nav-item float-left py-3 ml-5 text-xl">Projects</div>
      <div class="nav-item float-left py-3 ml-3 text-xl">About</div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const title = ref('Closing the Gap');
    const subtitle = ref('in Non-Latin Script Data');

    return {
      title,
      subtitle
    };
  },
  provide: {
    // more languages can be added for different format options, yet existing:
    // - ara
    rtlCharset: /[\u0600-\u06FF]/,
    utfSort: (arr) => {
      // defines, at which position the letter shall occur. Although not perfect, this might provide a more equal visibility of Arabic next to Latin
      // more languages can be added in the same way. If not, content in that languages is likely to be appended at the bottom.
      const dictAra = {
        ا: 'A',
        ع: 'ʿ',
        ب: 'B',
        د: 'D',
        ض: 'D',
        ظ: 'D',
        ذ: 'D',
        ت: 'T',
        ث: 'T',
        ط: 'T',
        ز: 'Z',
        ر: 'R',
        س: 'S',
        ش: 'S',
        ص: 'S',
        غ: 'G',
        ج: 'G',
        ف: 'F',
        ق: 'Q',
        ك: 'K',
        ل: 'L',
        م: 'M',
        ن: 'N',
        ه: 'H',
        ح: 'H',
        خ: 'H',
        و: 'U',
        ي: 'I',
      };
      arr.sort((a, b) => {
        const newA = (Object.keys(dictAra).includes(a)) ? dictAra[a] : a;
        const newB = (Object.keys(dictAra).includes(b)) ? dictAra[b] : b;
        if (newA > newB) return 1;
        if (newA < newB) return -1;
        return 0;
      });
      return arr;
    },
  },
};
</script>
