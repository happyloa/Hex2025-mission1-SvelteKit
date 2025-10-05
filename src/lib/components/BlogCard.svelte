<script lang="ts">
	type Post = {
		href: string;
		dateTime: string;
		dateLabel: string;
		tags: string[]; // 一般標籤（# 開頭）
		title: string;
		excerpt: string;
		popular?: boolean; // 是否「人氣文章」
		img: {
			mobile: string;
			desktop: string;
			alt: string;
		};
	};

	export let post: Post;
</script>

<a
	class="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
	href={post.href}
>
	<article>
		<!-- 圖片 -->
		<figure class="mb-4 overflow-hidden border border-border">
			<picture>
				<source media="(max-width: 1024px)" srcset={post.img.mobile} />
				<img
					src={post.img.desktop}
					alt={post.img.alt}
					class="block w-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-2"
					loading="lazy"
				/>
			</picture>
		</figure>

		<!-- 日期 -->
		<time datetime={post.dateTime} class="mb-1 block font-medium text-ink">
			{post.dateLabel}
		</time>

		<!-- 標籤 -->
		<ul class="flex flex-wrap items-center gap-x-2 gap-y-1 text-tag font-medium text-brand">
			{#each post.tags as t}
				<li>{t}</li>
			{/each}
			{#if post.popular}
				<li class="rounded-40 bg-brand px-3 py-1 text-base font-bold text-white">人氣文章</li>
			{/if}
		</ul>

		<!-- 標題 -->
		<h3 class="mb-2 text-card-title font-bold text-ink">{post.title}</h3>

		<!-- 內文（兩行截斷） -->
		<p class="mb-4 line-clamp-2 text-base font-medium text-muted">
			{post.excerpt}
		</p>

		<!-- CTA -->
		<button
			type="button"
			class="inline-flex items-center rounded-40 border border-ink bg-surface px-4 py-2 transition-colors duration-300 ease-in-out group-hover:bg-ink group-hover:text-white"
		>
			閱讀內文
		</button>
	</article>
</a>
