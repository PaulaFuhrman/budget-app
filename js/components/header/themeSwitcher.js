const themeSwitcher = document.querySelector('#switchTheme')

export const toggleTheme = () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
        themeSwitcher.classList.add('rotate')
        localStorage.setItem('light-mode', 'false')
    } else {
        localStorage.setItem('light-mode', 'true')
        document.body.classList.add('light-mode')
        document.body.classList.remove('dark-mode')
        themeSwitcher.classList.remove('rotate')
    }
}

const setThemeOnLaunch = () => {
    const savedTheme = localStorage.getItem('light-mode')

    if (savedTheme === 'true') {
        document.body.classList.add('light-mode')
        document.body.classList.remove('dark-mode')
    } else if (savedTheme === 'false') {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
        themeSwitcher.classList.add('rotate')
    }
};

themeSwitcher.addEventListener('click', toggleTheme)
setThemeOnLaunch()