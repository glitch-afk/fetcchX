import React, { useRef, useState, useEffect } from "react";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

const How = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <div className="h-[90vh] w-full flex">
      <div
        className="w-1/2 mr-auto border border-green-200 h-full"
        ref={containerRef}
      >
        <div className="isVisible">
          {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
        </div>
        <img src={"https://picsum.photos/400/400"} alt="moe" />
      </div>
      <div className="w-1/2 overflow-y-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        quisquam laboriosam maxime a autem suscipit quas eligendi nam ipsam
        possimus explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi,
        minima vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque
        quo suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam
        laboriosam maxime a autem suscipit quas eligendi nam ipsam possimus
        explicabo ex, nisi ducimus, illum dignissimos cupiditate? Modi, minima
        vel. Ipsa dignissimos illo praesentium sapiente nesciunt cumque quo
        suscipit aliquam facere architecto, deleniti nobis! Labore dolorum,
        voluptas magni soluta quisquam doloribus accusamus excepturi molestias
        at quod incidunt? Dolorum cum esse rem aperiam autem quae qui! Quibusdam
        dolor similique reiciendis velit nam minima aliquam! Provident molestiae
        qui, distinctio est officia voluptatibus dignissimos repellendus,
        debitis, facere eos quia nostrum consectetur doloremque? Voluptatum,
        nostrum et? Minima quos ipsa libero, non, architecto saepe illum porro
        blanditiis dignissimos tempora suscipit possimus iste earum tenetur
        delectus nesciunt cum natus ipsum voluptate quia quod enim. Itaque
        culpa, ab officia nulla dicta sit vitae commodi quos architecto saepe
        reiciendis, quas eum quasi quo repudiandae totam illo? Voluptatum ea
        mollitia aliquam ipsum voluptate natus culpa commodi, aperiam
        cupiditate, dolor ex neque autem ducimus consequuntur animi obcaecati
        nulla. Aspernatur aperiam reprehenderit inventore perspiciatis, quos
        nobis veniam porro libero dignissimos repudiandae aut excepturi officiis
        tenetur atque numquam in maxime optio ipsum hic esse vel? Praesentium
        pariatur mollitia possimus consequatur, temporibus minima doloremque qui
        earum fugiat quae, quasi voluptates asperiores quia blanditiis.
      </div>
    </div>
  );
};

export default How;
