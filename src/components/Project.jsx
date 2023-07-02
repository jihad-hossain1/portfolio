import { Card, Image, List, Modal } from "antd";
import { handler } from "daisyui";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  // const [visible, setVisible] = useState([]);
  const [items, setItems] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(previewImages);
  useEffect(() => {
    setLoading(true);
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log("show on data", data);
        setItems(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="pt-20">
      <h4 className=" py-10 text-center text-5xl font-thin text-gray-600">
        My Project
      </h4>
      {/* option 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="boder border-neutral-100 shadow p-2">
            <Image
              src={item?.image}
              preview={{ visible: false }}
              onClick={() => setPreviewImages(item?.images)}
            ></Image>
            <h4 className="text-xl font-semibold">{item?.projectName}</h4>
            <ul className="">
              {item?.itemList.map((list, index) => (
                <li key={index} className="list-disc ml-8 my-4">
                  {list}
                </li>
              ))}
            </ul>
            <div>
              <Link
                to={item?.link}
                className="hover:underline text-gray-600 text-xl"
              >
                Live Link Here
              </Link>
            </div>
          </div>
        ))}
        {previewImages?.length > 0 ? (
          <Image.PreviewGroup
            preview={{
              visible: previewImages?.length,
              onVisibleChange: (value) => {
                if (!value) {
                  setPreviewImages([]);
                }
              },
            }}
          >
            {previewImages?.map((image, index) => (
              <Image key={index} src={image}></Image>
            ))}
          </Image.PreviewGroup>
        ) : null}{" "}
      </div>

      {/* option 2 */}
      <div>
        {/* <List
          loading={loading}
          dataSource={items}
          grid={{ xs: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
          renderItem={(item, index) => {
            return (
              <Card key={index}>
                <Image
                  src={item?.image}
                  preview={{ visible: false }}
                  onClick={() => setPreviewImages(item?.images)}
                ></Image>
              </Card>
            );
          }}
        ></List>
        {previewImages?.length > 0 ? (
          <Image.PreviewGroup
            preview={{
              visible: previewImages?.length,
              onVisibleChange: (value) => {
                if (!value) {
                  setPreviewImages([]);
                }
              },
            }}
          >
            {previewImages?.map((image, index) => (
              <Image key={index} src={image}></Image>
            ))}
          </Image.PreviewGroup>
        ) : null} */}
      </div>

      {/* option 3 */}
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <Card key={index}>
            <div
              onClick={() => setPreviewImages(item?.images)}
              className="cursor-pointer"
            >
              <img onClick={showModal} src={item?.image} alt="" />
            </div>
          </Card>
        ))}
      </div> */}
      {/* <Modal
        width={600}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {previewImages.map((image, index) => (
          <div key={index}>
            <img src={image}></img>
          </div>
        ))}
      </Modal> */}
    </div>
  );
};

export default Project;
