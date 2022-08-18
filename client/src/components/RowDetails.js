// import axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';

function RowDetails(Email, Lastname, Firstname, Age, Id) {
  return (
    <tr>
      <th>{Email}</th>
      <th>{Lastname}</th>
      <th>{Firstname}</th>
      <th>{Age}</th>
      {/* <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th> */}
      <td className="gap__actions">
        <span className="badge bg-info">
        <Link to={`/${Id}`} className="text-white">
          <i className="fas fa-edit"></i>
        </Link>
        </span>

        <span className="badge bg-danger" onClick="">
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}

export default RowDetails;
