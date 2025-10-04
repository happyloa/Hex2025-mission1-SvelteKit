<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';

	const posts = [
		{
			href: '#',
			dateTime: '2024-10-11',
			dateLabel: '2024/10/11',
			tags: ['#React', '#入門基礎'],
			title: 'React 入門不再迷惘：三步驟帶你上手核心概念',
			excerpt:
				'你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。',
			img: {
				mobile: '/images/blog/mobile/photo10.png',
				desktop: '/images/blog/desktop/photo4.png',
				alt: 'React 入門不再迷惘：三步驟帶你上手核心概念文章圖片'
			}
		},
		{
			href: '#',
			dateTime: '2024-09-07',
			dateLabel: '2024/09/07',
			tags: ['#作品集', '#求職攻略'],
			title: '前端作品集打造指南：讓你的專案成為履歷亮點',
			excerpt:
				'對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。',
			img: {
				mobile: '/images/blog/mobile/photo1.png',
				desktop: '/images/blog/desktop/photo1.png',
				alt: '前端作品集打造指南文章圖片'
			}
		},
		{
			href: '#',
			dateTime: '2024-09-03',
			dateLabel: '2024/09/03',
			tags: ['#CSS設計', '#視覺體驗'],
			title: 'CSS 魔法大揭密：排版與設計的三大關鍵技巧',
			excerpt:
				'在瀏覽器畫面上實現各種精美介面一直是前端開發充滿成就感的部分。但複雜佈局或響應式設計常讓人抓破頭皮；本文分享三大技巧，幫助你有效率地駕馭 CSS，打造兼具美感與功能性的網頁。',
			img: {
				mobile: '/images/blog/mobile/photo2.png',
				desktop: '/images/blog/desktop/photo2.png',
				alt: 'CSS 魔法大揭密文章圖片'
			}
		},
		{
			href: '#',
			dateTime: '2024-07-09',
			dateLabel: '2024/07/09',
			tags: ['#轉職工程師', '#學習心法'],
			title: '前端轉職必讀：從自學者到工程師的心路歷程',
			excerpt:
				'自學進入前端領域聽起來振奮，但過程的挫折與疑慮常令人猶豫。本文分享轉職經驗與調適心法，提供投入前端的方向與力量。',
			img: {
				mobile: '/images/blog/mobile/photo3.png',
				desktop: '/images/blog/desktop/photo6.png',
				alt: '前端轉職必讀文章圖片'
			}
		},
		{
			href: '#',
			dateTime: '2024-07-08',
			dateLabel: '2024/07/08',
			tags: ['#面試準備', '#工程師求職'],
			title: '前端面試不再慌：破解常見提問的三大策略',
			excerpt:
				'面試不只看程式碼，還看解題流程與溝通能力。本文分享三大難題與回應策略，幫你在面試場合更從容。',
			popular: true,
			img: {
				mobile: '/images/blog/mobile/photo4.png',
				desktop: '/images/blog/desktop/photo3.png',
				alt: '前端面試不再慌文章圖片'
			}
		},
		{
			href: '#',
			dateTime: '2024-06-29',
			dateLabel: '2024/06/29',
			tags: ['#Vue3', '#框架學習'],
			title: 'Vue 3 新手指南：快速掌握 Composition API 與關鍵特色',
			excerpt:
				'Vue 3 導入 Composition API，大幅提升可讀性與維護性。本文帶你快速理解其特點並上手新版本思維。',
			img: {
				mobile: '/images/blog/mobile/photo5.png',
				desktop: '/images/blog/desktop/photo5.png',
				alt: 'Vue 3 新手指南文章圖片'
			}
		}
	];
</script>

<section class="mx-auto max-w-page px-6 py-10 lg:px-12">
	<main>
		<ul
			class="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 md:gap-x-3 md:gap-y-8 lg:grid-cols-3"
		>
			{#each posts as post}
				<li><BlogCard {post} /></li>
			{/each}
		</ul>
	</main>
</section>
