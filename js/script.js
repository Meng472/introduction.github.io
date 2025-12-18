document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 打字机效果内容
    const textToType = "致力于打造极致用户体验的前端工程师。擅长将设计美学与代码逻辑完美融合，创造不仅可用，而且令人愉悦的Web产品。";
    const typeWriterElement = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typeWriterElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 40); // 打字速度
        }
    }
    
    // 延迟一点开始打字，增加仪式感
    setTimeout(typeWriter, 500);

    // 2. 按钮交互
    const btn = document.getElementById('downloadBtn');
    btn.addEventListener('click', () => {
        alert('正在生成 PDF... (模拟功能)');
        // 实际开发中这里会调用 window.print()
        window.print();
    });

    // 3. 简单的滚动显现动画 (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // 给所有大板块加上初始隐藏状态
    const sections = document.querySelectorAll('.section-block, .sidebar > div');
    sections.forEach(sec => {
        sec.style.opacity = 0;
        sec.style.transform = 'translateY(20px)';
        sec.style.transition = 'all 0.6s ease-out';
        observer.observe(sec);
    });
});