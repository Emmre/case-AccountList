import React, { Component, Fragment } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import {
  AddBasket,
  ContentBox,
  DescriptionStyled,
  HeaderShop,
  HeaderStyled,
  TextBox,
  TotalBox,
  TotalPrice,
} from "../elements/styled";
import logo from "../Icons/vector.svg";
import { getAllHomePage } from "../utils/axios";

interface IMyComponentProps {
  fetchData: IFetchData[];
  product: string[];
}

interface IFetchData {
  id: number;
  name: string;
  email: string;
}

class Shopping extends Component<any, IMyComponentProps> {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
      product: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const { data } = await getAllHomePage();
      this.setState({ fetchData: data });
    } catch (error) {
      console.error("error");
    }
  };

  handleSelect = (price) => {
    this.setState({ product: [...this.state.product, price] });
  };

  render() {
    const { t } = this.props;
    const { fetchData, product } = this.state;

    let totalMoney: any = 0;
    if (product.length) {
      totalMoney = product.reduce((prev, curr) => prev + curr);
    }
    return (
      <Fragment>
        {fetchData?.map(({ id, name, email }) => {
          let money = id * 200;
          return (
            <Fragment key={id}>
              <ContentBox>
                <img
                  src="https://source.unsplash.com/75x75/"
                  alt="random"
                  loading="lazy"
                  width={75}
                  height={75}
                />
                <TextBox>
                  <HeaderStyled>{name}</HeaderStyled>
                  <DescriptionStyled>{email}</DescriptionStyled>
                  <TotalBox>
                    <div>3.9</div>
                    <div>3.7</div>
                  </TotalBox>
                  <div>
                    {money} {t("money")}
                  </div>
                  <AddBasket onClick={() => this.handleSelect(money)}>
                    <img
                      src={logo}
                      width={13}
                      height={18}
                      alt="random"
                      loading="lazy"
                    />
                    <span>{t("addBasket")}</span>
                  </AddBasket>
                </TextBox>
              </ContentBox>
            </Fragment>
          );
        })}
        <TotalPrice>
          <HeaderShop>{t("resultItems")}</HeaderShop>
          <div>
            {t("resultItems")}: {totalMoney} {t("money")}
          </div>
          <div>{t("tax")}: 21,45 TL</div>
          <div>
            {t("total")}: {Number(totalMoney + 21.45)} TL
          </div>
        </TotalPrice>
      </Fragment>
    );
  }
}

export default withTranslation()(Shopping);
