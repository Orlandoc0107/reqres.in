import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchListUsers } from '@/app/lib/reqres';
import { Users } from '@/app/lib/definitions';
import Image from 'next/image';

const ListUsers = () => {
  const [users, setUsers] = useState<Users | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Users = await fetchListUsers(currentPage);
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (delta: number) => {
    const newPage = Math.max(1, currentPage + delta);
    setCurrentPage(newPage);
    router.push(`/dashboard?page=${newPage}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users?.data && (
          <>
            {users.data.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md overflow-hidden p-4"
              >
                <div className="relative mb-4">
                  <Image
                    src={user.avatar}
                    alt={`${user.first_name} Avatar`}
                    width={80}
                    height={90}
                    className="rounded-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">
                    {user.first_name} {user.last_name}
                  </p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="mt-4 flex justify-center items-center space-x-4 gap-2">
  <button
    onClick={() => handlePageChange(-1)}
    disabled={currentPage === 1}
    className={`px-2 py-2 rounded-md ${
      currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Anterior
  </button>
  <span className="text-lg font-bold">{currentPage}</span>
  <button
    onClick={() => handlePageChange(1)}
    disabled={!users?.data || users?.data.length === 0}
    className={`px-2 py-2 rounded-md ${
      !users?.data || users?.data.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Siguiente
  </button>
</div>
    </div>
  );
};

export default ListUsers;
