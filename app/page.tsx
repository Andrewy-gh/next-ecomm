import Link from 'next/link';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { getServerSession } from 'next-auth/next';
import { options } from './options';

import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession(options);
  //   session:  {
  //   user: {
  //     name,
  //     email,
  //     image,
  //   }
  // }
  const loginButtons = (
    <>
      <div className="mb-1">
        <LoginButton provider={'github'} />
      </div>
      <div>
        <LoginButton provider={'google'} />
      </div>
    </>
  );

  const sessionInterface = (
    <>
      <div>{session?.user?.name}</div>
      <LogoutButton />
    </>
  );
  return (
    <main>
      <div>This is the home page.</div>
      <Link href="/products">Products</Link>
      <Link href="/cart">Cart</Link>
      {session ? sessionInterface : loginButtons}
      <div className="text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background">
        <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
          <div className="p-5 font-head text-step-4 text-test-primary bg-purple-300 bg-opacity-50 rounded-xl">
            --------
          </div>
        </header>
        <div className="w-text-wrapper mx-auto">
          <p className="text-step-0 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat a magna non varius. Proin leo felis, euismod non porta
            eget, varius sit amet sapien. Maecenas in nulla at leo convallis
            consectetur id a sapien. Nulla nec pulvinar nisi. Vivamus non
            facilisis lacus, et volutpat libero. Nulla ac odio aliquam, accumsan
            arcu ut, lacinia est. Nulla eu sem elit. Fusce nec laoreet sem,
            semper molestie libero.
          </p>
          <p className="text-step-0 mb-4">
            Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
            lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
            finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
            sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
            Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
            Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
            purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
            consequat nulla nunc in ligula.
          </p>
          <p className="text-step-0 mb-4">
            Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
            porta dignissim hendrerit. Cras id velit varius, fermentum lectus
            vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
            vulputate imperdiet fringilla. Donec blandit libero massa.
            Suspendisse dictum diam mauris, vitae fermentum dolor tincidunt in.
            Pellentesque sollicitudin venenatis dolor, vitae scelerisque elit
            ultrices eu. Donec eget sodales risus, quis dignissim neque.
          </p>
        </div>
        <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
          <div className="p-5 text-step-3 text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Parralax inline
          </div>
        </section>
        <section>
          <div className="w-full h-full mb-28 grid grid-cols-1 md:grid-cols-2">
            <div className="grid place-items-center p-5">
              <div className="relative aspect-w-9 aspect-h-9 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Picture of something nice"
                  fill={true}
                />
              </div>
            </div>
            <div className="bg-gray-300 p-12 grid place-items-center ">
              <div className="relative w-36 h-36 mb-5 overflow-hidden outline-red-700">
                <Image
                  src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Picture of something nice"
                  fill={true}
                />
              </div>
              <div className="w-text-wrapper mx-auto">
                <p className="text-step-0">
                  GREY BACKGROUND HALF SCREEN. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Mattis ullamcorper velit sed
                  ullamcorper morbi. Consectetur purus ut faucibus pulvinar.
                  Tincidunt tortor aliquam nulla facilisi. Nullam ac tortor
                  vitae purus faucibus ornare. Tristique senectus et netus et
                  malesuada fames ac turpis. Erat nam at lectus urna duis
                  convallis. Lobortis scelerisque fermentum dui faucibus in
                  ornare quam viverra.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-step-3 p-8 text-center outline">---</h3>
          </div>
        </section>
        <section>
          <div className="w-full h-full mb-28 grid grid-cols-1 md:grid-cols-2">
            <div className="grid place-items-center p-5">
              <div className="relative aspect-w-8 aspect-h-8 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Picture of something nice"
                  fill={true}
                />
              </div>
            </div>
            <div className="grid place-items-center p-5">
              <div className="relative aspect-w-8 aspect-h-8 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Picture of something nice"
                  fill={true}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-300 p-12 grid place-items-center ">
              <div className="relative h-[50vh] w-auto mb-5 overflow-hidden outline-red-700">
                <Image
                  src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Picture of something nice"
                  fill={true}
                />
              </div>
              <div className="p-12 w-text-wrapper">
                <p className="text-step-0">
                  GREY BACKGROUND IMAGE ON TOP. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Mattis ullamcorper velit sed
                  ullamcorper morbi. Consectetur purus ut faucibus pulvinar.
                  Tincidunt tortor aliquam nulla facilisi. Nullam ac tortor
                  vitae purus faucibus ornare. Tristique senectus et netus et
                  malesuada fames ac turpis. Erat nam at lectus urna duis
                  convallis. Lobortis scelerisque fermentum dui faucibus in
                  ornare quam viverra.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto w-text-wrapper">
          <p className="text-step-0 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat a magna non varius. Proin leo felis, euismod non porta
            eget, varius sit amet sapien. Maecenas in nulla at leo convallis
            consectetur id a sapien. Nulla nec pulvinar nisi. Vivamus non
            facilisis lacus, et volutpat libero. Nulla ac odio aliquam, accumsan
            arcu ut, lacinia est. Nulla eu sem elit. Fusce nec laoreet sem,
            semper molestie libero.
          </p>
          <p className="text-step-0 mb-4">
            Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
            lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
            finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
            sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
            Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
            Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
            purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
            consequat nulla nunc in ligula.
          </p>
          <p className="text-step-0 mb-4">
            Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
            porta dignissim hendrerit. Cras id velit varius, fermentum lectus
            vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
            vulputate imperdiet fringilla. Donec blandit libero massa.
            Suspendisse dictum diam mauris, vitae fermentum dolor tincidunt in.
            Pellentesque sollicitudin venenatis dolor, vitae scelerisque elit
            ultrices eu. Donec eget sodales risus, quis dignissim neque.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
          <div className="mx-auto w-text-wrapper">
            <p className="text-step-0 mb-4">
              BOTTOM IMAGE FIT TEST. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec placerat a magna non varius. Proin leo
              felis, euismod non porta eget, varius sit amet sapien. Maecenas in
              nulla at leo convallis consectetur id a sapien. Nulla nec pulvinar
              nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
              odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit.
              Fusce nec laoreet sem, semper molestie libero.
            </p>
          </div>
          <div className="relative aspect-w-9 aspect-h-16 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Picture of something nice"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
