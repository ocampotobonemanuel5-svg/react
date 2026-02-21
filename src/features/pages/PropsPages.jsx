import React from "react";

function getImageUrl(person) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}

const Avatar = ({ person }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card bg-secondary border-0 shadow-sm h-100 text-center p-3">
        <img
          className="rounded-circle border border-primary border-3 mx-auto mb-3"
          src={getImageUrl(person)}
          alt={person.name}
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <h6 className="text-white mb-0">{person.name}</h6>
      </div>
    </div>
  );
}

export default function PropsPages() {
  return (
    <div className="container">
      <h2 className="text-center mb-5 display-6 fw-bold">Nuestros Expertos</h2>
      <div className="row justify-content-center">
        <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} />
        <Avatar person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} />
        <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} />
        <Avatar person={{ name: 'Hedy Lamarr', imageId: 'yXOvdOS' }} />
        
      </div>
    </div>
  );

  
}