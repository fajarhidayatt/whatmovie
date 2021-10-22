import Image from 'next/image';

export default function MovieNotFound() {
  return (
    <div className="text-center">
      <Image src="/image/movie-not-found.svg" width={500} height={250} />
      <h1 className="mt-5">Upsss! Movie Not Found</h1>
    </div>
  );
}
