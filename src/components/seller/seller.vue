<template>
	<div class="seller" v-el:seller>
		<div class="seller-content">
			<div class="overview">
				<h1 class="title">{{seller.name}}</h1>
				<div class="desc border-1px">
					<star :size="36" :score="seller.score"></star>
					<span class="text">({{seller.ratingCount}})</span>
					<span class="text">月售{{seller.sellCount}}单</span>
				</div>
				<ul class="remark">
					<li class="block">
						<h2>起送价</h2>
						<div class="content">
							<span class="stress">{{seller.minPrice}}</span>元
						</div>
					</li>
					<li class="block">
						<h2>商家配送</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryPrice}}</span>元
						</div>
					</li>
					<li class="block">
						<h2>平均配送时间</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryTime}}</span>分钟
						</div>
					</li>
				</ul>
			</div>
			<split></split>
			<div class="bulletin">
				<h1 class="title">公告与活动</h1>
				<div class="content-wrapper border-1px">
					<p class="content">{{seller.bulletin}}</p>
				</div>
				<ul class="supports" v-if="seller.supports">
	                <li class="support-item border-1px" v-for="item in seller.supports">
	                    <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
	                    <span class="text">{{seller.supports[$index].description}}</span>
	                </li>
	            </ul>
			</div>
			<split></split>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import star from 'components/star/star'
	import split from 'components/split/split'

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		components: {
			star,
			split
		},
		data () {
			return {

			}
		},
		ready() {
			this._initScroll()
		},
		created () {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		},
		watch: {
			'seller'() {
				this._initScroll()
			}
		},
		methods: {
			_initScroll() {
				if (!this.scroll) {
					this.scroll = new BScroll(this.$els.seller, {
						click: true
					})
				} else {
					this.scroll.refresh();
				}
			}
		},
		computed: {

		}
	}
</script>

<style lang="stylus">
	@import "../../common/stylus/mixin.styl"

	.seller
		position: absolute
		top: 174px
		bottom: 0
		left: 0
		width: 100%
		overflow: hidden
		.overview
			padding: 18px
			.title
				margin-bottom: 8px
				line-height: 14px
				font-size: 14px
				color: rgb(7,17,27)
			.desc
				padding-bottom: 18px
				border-1px(rgba(7,17,27,0.1))
				font-size: 0
				.star
					display: inline-block
					margin-right: 8px
					vertical-align: top
				.text
					display: inline-block
					line-height: 18px
					margin-right: 12px
					font-size: 10px
					color: rgba(77,85,93,1)
			.remark
				display: flex
				padding-top: 18px
				.block
					flex: 1
					width: 1%
					text-align: center
					border-right: 1px solid rgba(7,17,27,0.1)
					&:last-child
						border-right: none
					h2
						margin-bottom: 4px
						line-height: 10px
						font-size: 10px
						color: rgba(147,153,159,1)
					.content
						line-height: 24px
						font-size: 10px
						color: rgba(7,17,27,1)
						.stress
							font-size: 24px
		.bulletin
			padding: 18px 18px 0 18px
			.title
				margin-bottom: 8px
				line-height: 14px
				font-size: 14px
				color: rgb(7,17,27)
			.content-wrapper
				padding: 0 12px 16px 12px
				border-1px(rgba(7,17,27,0.1))
				.content
					line-height: 24px
					font-size: 12px
					color: rgb(240,20,20)
					text-align: justify
			.supports
				.support-item
					padding: 16px 12px
					border-1px(rgba(7,17,27,0.1))
					font-size: 0
					&:last-child
						border-none()
					.icon
						display: inline-block
						width: 16px
						height: 16px
						vertical-align: top
						margin-right: 6px
						background-size: 16px 16px
						background-repeat: no-repeat
						&.decrease
							bg-image('decrease_4')
						&.discount
							bg-image('discount_4')
						&.guarantee
							bg-image('guarantee_4')
						&.invoice
							bg-image('invoice_4')
						&.special
							bg-image('special_4')
					.text
						line-height: 16px
						font-size: 12px
						color: rgb(7,17,27)
</style>