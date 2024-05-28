import { useEffect, useState } from 'react';

export default function Home() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch('https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/paris-2024-sites-olympiques-et-paralympiques-franciliens@datailedefrance/records')
      .then(response => response.json())
      .then(data => setSites(data.results))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Paris 2024 Olympic Sites</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sports
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sites.map((site) => (
              <tr key={site.nom}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{site.nom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{site.sports.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
