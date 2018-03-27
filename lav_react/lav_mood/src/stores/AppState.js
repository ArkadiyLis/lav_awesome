import { observable, action } from "mobx";
import axios from "axios";

const canals = [
  {
    id: 1,
    name: "JT",
    avatar: false,
    isSelected: true
  },
  {
    id: 2,
    name: "EFT",
    avatar: true
  },
  {
    id: 3,
    name: "EvLcord",
    avatar: true
  },
  {
    id: 4,
    name: "KILLSTREAK",
    avatar: true,
    unread: 25
  },
  {
    id: 5,
    name: "Askaron Discord",
    avatar: true,
    unread: 15
  },
  {
    id: 6,
    name: "HYDRA",
    avatar: true
  }
];

const friends = [
  {
    id: 1,
    title: "EvLTime",
    isOnline: true,
    isRequests: false,
    isBlocked: false
  },
  {
    id: 2,
    title: "Mr.Kto?",
    isOnline: false,
    isRequests: false,
    isBlocked: false
  },
  {
    id: 3,
    title: "savenok.ivan",
    isOnline: true,
    isRequests: false,
    isBlocked: false
  },
  {
    id: 4,
    title: "capitanBomba",
    isOnline: true,
    isRequests: true,
    isBlocked: false
  },
  {
    id: 5,
    title: "KS_Sos",
    isOnline: false,
    isRequests: false,
    isBlocked: true
  }
];

export default class AppState {
  @observable canals;
  @observable friends;

  constructor() {
    this.canals = canals;
    this.friends = friends;
  }
}
