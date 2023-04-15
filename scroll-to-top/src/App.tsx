import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 200) {
        setVisible(true);
      }
      if (document.documentElement.scrollTop < 200) {
        setVisible(false);
      }
    };
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h1>Lorem Ipsum</h1>
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <div>
        Nam ac tristique nunc, in porttitor risus. Aenean venenatis, justo in
        laoreet venenatis, magna quam aliquam nisl, non molestie turpis neque ut
        lorem. Vestibulum dapibus sapien a purus aliquam, bibendum aliquam lacus
        tincidunt. Ut ut auctor turpis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus non risus fermentum, accumsan nisi ac, bibendum
        nisi. Cras ac purus a ligula malesuada consectetur eget id diam. Nullam
        vitae tincidunt erat. Mauris iaculis cursus dolor in egestas. Ut sed
        ullamcorper elit. Donec lacinia hendrerit felis. Sed ut sodales eros. In
        sem risus, pellentesque in purus ut, venenatis viverra nibh. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed arcu leo, auctor at dui sit amet, malesuada auctor erat.
        Etiam sodales eleifend odio, non convallis metus finibus maximus.
      </div>
      <hr />
      <h1>The end</h1>
      {visible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          Top
        </button>
      )}
    </>
  );
};

export default App;
