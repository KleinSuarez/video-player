let $video = document.querySelector('.video')
let $btnPlay = document.querySelector('.btn-play')
let $btnPause = document.querySelector('.btn-pause')
let $btnBackward = document.querySelector('.btn-backward')
let $btnForward = document.querySelector('.btn-forward')
let $progress = document.querySelector('.player__progress-bar')

$btnPlay.addEventListener('click', handlePlay)
$btnPause.addEventListener('click', handlePause)
$btnBackward.addEventListener('click', handleBackward)
$btnForward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)

function handlePlay() {
    $video.play()
    $video.muted = false
    $btnPlay.hidden = true
    $btnPause.hidden = false
}

function handlePause() {
    $video.pause()
    $btnPlay.hidden = false
    $btnPause.hidden = true
}

function handleBackward() {
    $video.currentTime -= 10
}

function handleForward() {
    $video.currentTime += 10
}

function handleLoaded(){
    $progress.max = $video.duration
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

function handleInput() {
    $video.currentTime = $progress.value
}