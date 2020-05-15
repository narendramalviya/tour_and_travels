import React, { Component } from "react";

class TourPackageManager extends Component {
    state = {
        tourPackages: [
            { id: 1, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 3, title: "winter sesson at shimla!", country: 'india', price: 70000 },
            { id: 4, title: "holyday at taj!", country: 'india', price: 70000 },
            { id: 5, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 6, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 7, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 8, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 9, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 10, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 11, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 12, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 13, title: "summer holiday at goa!", country: 'india', price: 60000 },
            { id: 14, title: "summer holiday at goa!", country: 'india', price: 60000 },
        ],
    };
    render() {
        
        return (
            <div>
                <h1>THis is TourPackageManager</h1>
            </div>
        );
    }
}
export default TourPackageManager;
