export default function Task({task}) {
  return (
    <tr className='fw-normal' >
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
    </tr>
);

}
