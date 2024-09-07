// 获取按钮和背景元素
var openModalBtn = document.getElementById('open-modal');
var modalBackground = document.getElementById('modal-background');
// 打开弹窗函数
function openModal() {
	modalBackground.style.display = 'flex';
}
// 关闭弹窗函数
function closeModal() {
	modalBackground.style.display = 'none';
}
// 绑定打开弹窗事件
openModalBtn.addEventListener('click', openModal);
// 绑定关闭弹窗事件
modalBackground.addEventListener('click', closeModal);