<template>
	<view class="content">
		<view class="main">
			<image src="/static/turntable@2x.png" style="width: 100%;height: 100%;" class="turntable"
			:style=" 'transform: rotate(' +deg+ 'deg);  transition-duration: ' +ss+'s ;'  "
			></image>
			<image src="/static/this@2x.png" mode="scaleToFill" style="width: 157upx;height: 229upx;" class="center-img" @click="start"></image>
			<image src="/static/img/tuoyuan@2x.png" style="width: 460upx;height: 75upx;" class="shadow"></image>
		</view>
		
			
		<view class="modal" :class="{show: modal}" @click="closeModal">
			<view class="modal-body" :class="{show: modal}" @click.stop>
				<view class="f-cc flex-column" style="margin-top: 300upx;">
					<view class="txt1" v-if="showTitle">恭喜您获得</view>
					<view class="txt2">{{modalTxt}}</view>
				</view>
				<image  src="../../static/home_gb@2x.png" @click="closeModal" class="close" style="width: 48upx;height: 48upx;"></image>
			</view>
		</view>
			
	</view>
</template>

<script>
	let luck = false // 锁
	// 奖品池
	let arr = [
		{deg:0, showTitle: true, msg: '200金币',id: '1' },
		{deg:45, showTitle: false, msg: '谢谢参与',id: '2'},
		{deg:90, showTitle: true, msg: '500金币',id: '3'},
		{deg:135, showTitle: false, msg: '谢谢参与',id: '4'},
		{deg:180, showTitle: true, msg: '1000金币',id: '5'},
		{deg:225, showTitle: false, msg: '再来一次',id: '6'},
		{deg:270, showTitle: true, msg: '50金币',id: '7'},
		{deg:315, showTitle: false, msg: '再来一次',id: '8'}
	]
	
	export default {
		data() {
			return {
				showTitle: true,
				modal: false, // 展示modal模块
				modalTxt: '', // 奖品
				ss: 5, // 旋转所用时间
				deg: 0 // 旋转角度
			};
		},
		onShow() {
			luck = false
		},
		methods:{
			
			play(num) {
				this.deg =  360 * 3 + arr[num].deg + 20
				setTimeout(()=> {
					this.showResult(arr[num])
				}, this.ss * 1000);
			},
			
			start() {
				if(luck) {
					return
				}
				luck = true // 关锁
				let num = Math.floor(Math.random() * arr.length)
				this.play(num)
			},
			
			
			//　展示结果
			showResult(data) {
				this.modal= true
				this.showTitle = data.showTitle
				this.modalTxt = data.msg
			},
			
			//　关闭
			closeModal() {
				luck = false
				let s = this.ss
				this.modal = false
				this.ss = 0
				this.deg = 0
				setTimeout(() => {
					this.ss = s
				}, 100)
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		position: relative;
		width: 100%;
		min-height: 100%;
	}
	.content {
		box-sizing: border-box;
		width: 100%;
		height: 100vh;
		background-size: cover;
		overflow: hidden;
		padding-bottom: 90upx;
		background-color: pink;
		
		.main {
			position: relative;
			width: 624upx;
			height: 624upx;
			margin: 316upx auto 39upx;
			.turntable {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
				margin: auto;
				// animation: rotateArc 5s cubic-bezier(0.61, 0.08, 0.35, 0.83);
				transform: rotate(0deg);
				z-index: 12;
				transition-timing-function: ease;
				transition-property: all;
				
				// transition: all 10s ease;
			}
			.center-img {
				position: absolute;
				top: 181upx;
				right: 0;
				left: 0;
				margin: auto;
				z-index: 99;
			}
			.shadow {
				position: absolute;
				bottom: -30upx;
				left: 0;
				right: 0;
				margin: auto;
				z-index: 1;
			}
		}
		.h1 {
			font-size: 32upx;
			text-align: center;
			color: #fff;
		}
		.h2 {
			width: 450upx;
			font-size: 22upx;
			color: #fff;
			margin-bottom: 22upx;
			margin: auto;
		}
		.modal.show {
			display: block;
		}
		.modal {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0,0,0, .4);
			z-index: 100;
			display: none;
			.modal-body.show {
				animation: scaleFrames .4s cubic-bezier(.5,.49,.57,1.41) forwards;
			}
			.modal-body {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
				width: 544upx;
				height: 570upx;
				background-size: 100% 100%;
				background-image: url('../../static/zhuanpan_tanchaung@2x.png');
				padding: 1upx;
				transform: scale(0);
				.txt1 {
					font-size:60upx;
					font-family:Source Han Sans CN;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:104upx;
					text-shadow:0upx -5upx 10upx rgba(253,49,58,0.5);
					text-align: center;
				}
				.txt2 {
					font-size:60upx;
					font-family:Source Han Sans CN;
					font-weight:500;
					color:rgba(255,234,58,1);
					line-height:121upx;
					text-align: center;
				}
				.close {
					position: absolute;
					left: 0;
					right: 0;
					bottom: -68upx;
					margin: auto;
				}
			}
		}
	}
	
	
	@keyframes scaleFrames{
		from{
			transform: scale(0);
		}
		to{
			transform: scale(1);
		}
	}
	
	@keyframes rotateArc{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(3600deg);
		}
	}
</style>
