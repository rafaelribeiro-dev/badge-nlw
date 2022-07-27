const socialMedia = {
  github: 'rafaelribeiro-dev',
  youtube: 'MrRafinhavideos',
  instagram: 'devribeiro',
  facebook: 'rafael.r.alves.1',
  twitter: 'rafaelr_alves'
}

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocialLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      userName.textContent = data.name
      userLink.href = data.html_url
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfo()
