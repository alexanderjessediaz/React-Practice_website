import React from 'react'

export default function MainContainer(props){
    return (
        <body>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header"> 
                        <a class="navbar-brand" href="#">Logo</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>                
                        <li class="active"><a href="#">About</a></li>                
                        <li class="active"><a href="#">Contact</a></li>
                    </ul>                
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twiiter</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
            </nav>

            <div class="container margin-top:50px">
                <div class="media">
                    <div class="media-body">
                    <h1 class="mt-0">Website Under Construction:
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </h1>
                    <img 
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ea5339a-7a33-486a-8e47-2cdf3b21336f/dbwripy-a5f13ad2-1079-4328-a4fc-79650aba9913.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi81ZWE1MzM5YS03YTMzLTQ4NmEtOGU0Ny0yY2RmM2IyMTMzNmYvZGJ3cmlweS1hNWYxM2FkMi0xMDc5LTQzMjgtYTRmYy03OTY1MGFiYTk5MTMuZ2lmIn1dXX0.vS4nWxoTdIJIa_neuzpuwSDLnIOKXDS84qdkmhUTwQg" 
                        class="align-self-center mr-3" 
                        alt="http://localhost:3000"
                        height="300"
                        width="300"
                    />
                    </div>
                </div>
            </div>
            
        </body>
    )
}