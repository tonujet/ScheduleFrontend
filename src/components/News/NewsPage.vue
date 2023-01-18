<template>
  <div class="newsWrapper">
    <ModalWindow :isActive="isModalOpen"/>
    <NewsCardsList :news="news"/>
  </div>
</template>

<script>
import {ref} from "vue";
import ModalWindow from "@/components/UI/ModalWindow.vue";
import NewsCardsList from "./components/newsCardsList/NewsCardsList.vue";

export default {
  name: "NewsPage",
  components: {NewsCardsList, ModalWindow},
  computed: {
    news: () => news,
    isModalOpen: () => isModalOpen.value
  }
}

const isModalOpen = ref(false);
const handleModalSwitch = () => {
  isModalOpen.value ? isModalOpen.value = false : isModalOpen.value = true
}


const news = [{
  "id": 12,
  "title": "Normikkkkwqeq123231",
  "description": "norm",
  "text": "norm",
  "dateCreated": "2022-12-18T22:58:35.913644",
  "headerImgId": 2
}, {
  "id": 13,
  "title": "qweqeqqqqqqq123",
  "description": "qweqweqq3",
  "text": "weqweqw3",
  "dateCreated": "2022-12-19T00:13:31.204372",
  "headerImgId": 3
}, {
  "id": 14,
  "title": "2313",
  "description": "1231123",
  "text": "1231231",
  "dateCreated": "2022-12-19T00:16:12.671279",
  "headerImgId": 4
}, {
  "id": 15,
  "title": "Iems",
  "description": "qweqweq",
  "text": "weqeqweq",
  "dateCreated": "2022-12-19T00:16:21.180178",
  "headerImgId": 5
}, {
  "id": 16,
  "title": "Norm nazva",
  "description": "weqwe",
  "text": "qwqweeq",
  "dateCreated": "2022-12-19T00:16:29.92012",
  "headerImgId": 6
}, {
  "id": 19,
  "title": "zxczxc",
  "description": "zxczczxcx",
  "text": "qweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweq",
  "dateCreated": "2022-12-19T01:46:41.120765",
  "headerImgId": 7
}, {
  "id": 20,
  "title": "ereqwwrqq",
  "description": "qeqwerwewqw",
  "text": "wqerwerttr",
  "dateCreated": "2022-12-19T17:11:34.507734",
  "headerImgId": 8
}, {
  "id": 21,
  "title": "qwereqwr",
  "description": "ewrtqe",
  "text": "qwerwrtwe",
  "dateCreated": "2022-12-19T17:11:43.471204",
  "headerImgId": 9
}, {
  "id": 22,
  "title": "qwerewq",
  "description": "erwtrqerdg",
  "text": "qewreere",
  "dateCreated": "2022-12-19T17:11:57.928145",
  "headerImgId": 10
}, {
  "id": 23,
  "title": "ertrewqewreqwetrwg",
  "description": "ery344rjh4tgj",
  "text": "qwegreghtrehf",
  "dateCreated": "2022-12-19T17:12:47.233814",
  "headerImgId": 11
}, {
  "id": 24,
  "title": "eqweqweqweqw",
  "description": "eqweqweq",
  "text": "qweqweqweqeqw",
  "dateCreated": "2022-12-19T18:05:57.867188",
  "headerImgId": 12
}, {
  "id": 25,
  "title": "qweqweqwe",
  "description": "qewqeq",
  "text": "eqweqeqw",
  "dateCreated": "2022-12-19T18:06:03.509791",
  "headerImgId": 13
}, {
  "id": 26,
  "title": "qweqw",
  "description": "eqweqwe",
  "text": "qweqweweasdczxcxzc",
  "dateCreated": "2022-12-19T18:06:11.805024",
  "headerImgId": 14
}, {
  "id": 27,
  "title": "qweqeqw",
  "description": "eqeqw",
  "text": "eweqeqwe",
  "dateCreated": "2022-12-19T18:07:01.279044",
  "headerImgId": 15
}, {
  "id": 28,
  "title": "eqwqw",
  "description": "eqweqw",
  "text": "qeqwe",
  "dateCreated": "2022-12-19T18:07:05.094882",
  "headerImgId": 16
}, {
  "id": 29,
  "title": "12312312",
  "description": "1231313",
  "text": "123123123",
  "dateCreated": "2022-12-19T21:28:59.900359",
  "headerImgId": 17
}, {
  "id": 30,
  "title": "wewre",
  "description": "erwetrrwe",
  "text": "rtewrq",
  "dateCreated": "2022-12-19T21:45:35.585894",
  "headerImgId": 18
}, {
  "id": 31,
  "title": "waerdtghfewqwer",
  "description": "dtgfhrewqwewrt",
  "text": "qweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweq",
  "dateCreated": "2022-12-20T00:17:28.582039",
  "headerImgId": 19
}, {
  "id": 32,
  "title": "eqeqwe",
  "description": "qweqweq",
  "text": "qweqweqqwe",
  "dateCreated": "2022-12-20T00:23:42.3106",
  "headerImgId": 20
}, {
  "id": 33,
  "title": "qeweqe",
  "description": "wqeqweqw",
  "text": "eqweqweqweqw",
  "dateCreated": "2022-12-20T00:28:28.022527",
  "headerImgId": 21
}, {
  "id": 34,
  "title": "1231",
  "description": "31231231",
  "text": "31231231212",
  "dateCreated": "2022-12-20T00:30:00.999207",
  "headerImgId": 22
}, {
  "id": 40,
  "title": "asdad",
  "description": "qweqwewq",
  "text": "qweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweqqweqweq",
  "dateCreated": "2022-12-22T12:05:34.307238",
  "headerImgId": 28
}]
</script>

<style scoped>
</style>