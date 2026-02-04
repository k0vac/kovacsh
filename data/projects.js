var projects = [
    {
        title: "Journey Buster 3",
        description: "Tweets and Profiles on X / Twitter are automatically highlighted in red to signify the profile generates images using AI LLMs.",
        link: "https://journeybuster.com",
        badge: "maint"
    },
    {
        title: "Plib.it",
        description: "In progress project. More info soon.",
        badge: "class"
    },
    {
        title: "Ungolf",
        description: "Game jam project with best friend {0}",
        link: "https://jumpyuvu.itch.io/ungolf",
        badge: "finish",
        data: [
            ["jumpy", "https://jumpyuvu.com/"]
        ]
    },
]

function projectElement(index) {
    let cardDiv = document.createElement('div')
    cardDiv.classList.add('projectTile')
    let cardTitle = document.createElement('h4')

    let cardDesc = interpolateDescription(projects[index].description, projects[index].data);
    
    let cardCTA = document.createElement('a')
    cardCTA.innerText = 'VISIT'
    cardCTA.classList.add('cta')

    projects[index].link ? cardCTA.href = projects[index].link : cardCTA = null

    cardBadge = document.createElement('span')
    console.log(cardBadge)
    cardBadge.classList.add('badge')
    switch (projects[index].badge) {
        case "maint":
            cardBadge.classList.add('badge-maintenance')
            cardBadge.innerText = 'MAINTENANCE'
            break
        case "class":
            cardBadge.classList.add('badge-classified')
            cardBadge.innerText = 'CLASSIFIED'
            break
        case "active":
            cardBadge.classList.add('badge-active')
            cardBadge.innerText = 'ACTIVE'
            break
        case "finish":
            cardBadge.classList.add('badge-finished')
            cardBadge.innerText = 'FINISHED'
            break
        case "noBadge":
            cardBadge = null
            break
        default:
            cardBadge.innerText = projects[index].badge
            break
    }

    cardTitle.innerText = projects[index].title
    console.log(projects[index].badge)
    if(cardBadge) cardTitle.appendChild(cardBadge)
    cardDiv.appendChild(cardTitle)
    cardDiv.appendChild(cardDesc)

    cardCTA ? cardDiv.appendChild(cardCTA) : false
    return cardDiv
}

function interpolateDescription(description, data) {
    if (!data || !data.length) return document.createTextNode(description)

    const fragment = document.createDocumentFragment()

    const regex = /\{(\d+)\}/g

    let lastIndex = 0
    let match

    while ((match = regex.exec(description)) !== null) {
        const index = parseInt(match[1])
        const textBefore = description.slice(lastIndex, match.index)
        fragment.appendChild(document.createTextNode(textBefore))

        if (data[index]) {
            const [name, url] = data[index]
            const link = document.createElement("a")
            link.href = url
            link.target = "_blank"
            link.rel = "noopener noreferrer"
            link.textContent = name
            fragment.appendChild(link)
        } else {
            fragment.appendChild(document.createTextNode(match[0]))
        }

        lastIndex = regex.lastIndex
    }

    if (lastIndex < description.length) {
        fragment.appendChild(document.createTextNode(description.slice(lastIndex)))
    }

    return fragment
}
